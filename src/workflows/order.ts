import { ApplicationFailure, condition, defineSignal, executeChild, ParentClosePolicy, proxyActivities, setHandler, sleep } from "@temporalio/workflow";
import type * as activities from '../activities';
import { temporalio } from '../api/root';
import api = temporalio.cafe;

const { AddLoyaltyPoints, ProcessPayment, ProcessPaymentRefund } = proxyActivities<
  ReturnType<(typeof activities)['createActivities']>
>({
  startToCloseTimeout: '5 minute',
});

export const OrderStartedSignal = defineSignal<[undefined]>('order-fulfilment-started')

export const OrderFulfilmentWindow = 2 * 60 * 1000;

async function addLoyaltyPoints(input: api.OrderInput): Promise<any> {
  const itemCount = input.items.reduce((r, i) => r + Number(i.count), 0)
  await AddLoyaltyPoints(api.AddLoyaltyPointsInput.create({ email: input.email, points: itemCount }))
}

async function fulfilOrder(input: api.OrderInput) {
  const itemsByType = new Map()
  for (const i of input.items) {
    if (!itemsByType.has(i.type)) {
      itemsByType.set(i.type, [i])
    } else {
      itemsByType.get(i.type).push(i);
    }
  }

  const subOrders: Array<Promise<any>> = []
  itemsByType.forEach((items, t) => {
    let subOrder: string
    let input: api.KitchenOrderInput | api.BaristaOrderInput

    if (t == api.ProductType.PRODUCT_TYPE_FOOD) {
      subOrder = "KitchenOrder"
      input = api.KitchenOrderInput.create({ items: items })
    } else if (t == api.ProductType.PRODUCT_TYPE_BEVERAGE) {
      subOrder = "BaristaOrder"
      input = api.BaristaOrderInput.create({ items: items })
    } else {
      throw new Error(`unknown item type ${t}`)
    }

    subOrders.push(
      executeChild(
        subOrder,
        {
          args: [input],
          parentClosePolicy: ParentClosePolicy.PARENT_CLOSE_POLICY_REQUEST_CANCEL,
        }
      )
    )
  })

  return Promise.all(subOrders)
}

async function fulfilmentTimer() {
  return new Promise((_, reject) => {
    let timerStarted = false

    setHandler(OrderStartedSignal, () => {
      if (timerStarted) {
        return
      }
  
      sleep(OrderFulfilmentWindow).
        then(
          () => { reject(new ApplicationFailure("order not fulfilled within window")) },
          () => { /* ignore */ }
        )
  
      timerStarted = true
    })  
  })
}

export async function Order(input: api.OrderInput): Promise<api.OrderResult> {
  const payment = await ProcessPayment(api.ProcessPaymentInput.create({ token: input.paymentToken }))

  try {
    await Promise.race([fulfilOrder(input), fulfilmentTimer()])
  } catch (e) {
    await ProcessPaymentRefund(payment)
    throw e
  }

  if (input.email) {
    try { await addLoyaltyPoints(input) } catch { /* ignore */ }
  }

  return api.OrderResult.create();
}
