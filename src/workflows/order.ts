import { defineSignal, executeChild, ParentClosePolicy, proxyActivities, setHandler, sleep } from "@temporalio/workflow";
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

export const OrderStartToCompleteDeadline = 15 * 60 * 1000;

async function addLoyaltyPoints(input: OrderWorkflowInput): Promise<any> {
  let itemCount = input.Items.reduce((r, i) => r + i.Count, 0)
  await AddLoyaltyPoints({ Email: input.Email, Points: itemCount })
}

async function fulfilSubOrders(input: OrderWorkflowInput): Promise<any> {
  setHandler(OrderStartedSignal, () => {
    sleep(OrderStartToCompleteDeadline).then(() => {
      throw new Error(`order not completed within deadline`)
    })
  })

  let itemsByType = new Map()
  for (const i of input.Items) {
    if (!itemsByType.has(i.Type)) {
      itemsByType.set(i.Type, i)
    }
    itemsByType.get(i.Type).push(i);
  }

  let subOrders: Array<Promise<any>> = []
  itemsByType.forEach((t, items) => {
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
          parentClosePolicy: ParentClosePolicy.PARENT_CLOSE_POLICY_TERMINATE,
        }
      )
    )
  })

  await Promise.all(subOrders)
}

export async function Order(input: OrderWorkflowInput): Promise<OrderWorkflowResult> {
  const payment = await ProcessPayment({ Token: input.PaymentToken })

  try {
    await fulfilSubOrders(input)
  } catch (e) {
    await ProcessPaymentRefund(payment)
    throw e
  }

  if (input.Email) {
    try { await addLoyaltyPoints(input) } catch { }
  }

  return {};
}
