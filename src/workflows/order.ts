import { ApplicationFailure, condition, defineSignal, executeChild, ParentClosePolicy, proxyActivities, setHandler, sleep } from "@temporalio/workflow";
import type * as activities from '../activities';

const { AddLoyaltyPoints, ProcessPayment, ProcessPaymentRefund } = proxyActivities<
  ReturnType<(typeof activities)['createActivities']>
>({
  startToCloseTimeout: '5 minute',
});

export interface OrderLineItem {
  Type: string;
  Name: string;
  Price: number;
  Count: number;
}

export interface OrderWorkflowInput {
  Email: string
  PaymentToken: string
  Items: Array<OrderLineItem>
}

export interface OrderWorkflowResult { }

export interface OrderStartedSignal { }

export const OrderStartedSignal = defineSignal<[OrderStartedSignal]>('order-started')

export const OrderFulfilmentWindow = 2 * 60 * 1000;

async function addLoyaltyPoints(input: OrderWorkflowInput): Promise<any> {
  const itemCount = input.Items.reduce((r, i) => r + i.Count, 0)
  await AddLoyaltyPoints({ Email: input.Email, Points: itemCount })
}

function createSubOrders(input: OrderWorkflowInput): Array<Promise<any>> {
  const itemsByType = new Map()
  for (const i of input.Items) {
    if (!itemsByType.has(i.Type)) {
      itemsByType.set(i.Type, [i])
    } else {
      itemsByType.get(i.Type).push(i);
    }
  }

  const subOrders: Array<Promise<any>> = []
  itemsByType.forEach((items, t) => {
    let subOrder: string
    if (t == "food") {
      subOrder = "KitchenOrder"
    } else if (t == "beverage") {
      subOrder = "BaristaOrder"
    } else {
      throw new Error(`unknown item type ${t}`)
    }

    subOrders.push(
      executeChild(
        subOrder,
        {
          args: [{ Items: items }],
          parentClosePolicy: ParentClosePolicy.PARENT_CLOSE_POLICY_REQUEST_CANCEL,
        }
      )
    )
  })

  return subOrders
}

export async function Order(input: OrderWorkflowInput): Promise<OrderWorkflowResult> {
  const payment = await ProcessPayment({ Token: input.PaymentToken })

  let fulfilmentWindowExpired = false

  setHandler(OrderStartedSignal, () => {
    sleep(OrderFulfilmentWindow).
      then(() => { fulfilmentWindowExpired = true }, () => { /* ignore */ })
  })

  try {
    const subOrders = createSubOrders(input)
    await Promise.race([
      Promise.all(subOrders),
      condition(() => fulfilmentWindowExpired).then(
        () => { throw new ApplicationFailure('Failed to complete order within fulfilment window') }
      ),
    ])
  } catch (e) {
    await ProcessPaymentRefund(payment)
    throw e
  }

  if (input.Email) {
    try { await addLoyaltyPoints(input) } catch { /* ignore */ }
  }

  return {};
}
