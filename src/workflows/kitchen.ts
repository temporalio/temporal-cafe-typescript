import {
  condition,
  defineQuery,
  defineSignal,
  getExternalWorkflowHandle,
  setHandler,
  workflowInfo
} from '@temporalio/workflow';
import { temporalio } from '../api/root';
import api = temporalio.cafe;

export const KitchenOrderStatusQuery = defineQuery<api.KitchenOrderStatus>('status')
export const KitchenOrderItemStatusSignal = defineSignal<[api.KitchenOrderItemStatusUpdate]>('kitchen-order-item-status')

function newWorkflowState(input: api.KitchenOrderInput): api.KitchenOrderStatus {
  const items = input.items.flatMap<api.KitchenOrderLineItem>(
    (item) => Array(Number(item.count)).fill(api.KitchenOrderLineItem.create({ name: item.name }))
  )

  return api.KitchenOrderStatus.create({
    open: true,
    items: items,
  })
}

async function notifyStart() {
  const pid = workflowInfo().parent?.workflowId
  if (!pid) { return }

  const handle = getExternalWorkflowHandle(pid)
  await handle.signal("order-started")
}

export async function KitchenOrder(input: api.KitchenOrderInput): Promise<api.KitchenOrderResult> {
  const wf = newWorkflowState(input)
  let started = false;

  setHandler(KitchenOrderStatusQuery, () => {
    return wf;
  })

  setHandler(KitchenOrderItemStatusSignal, (update: api.KitchenOrderItemStatusUpdate) => {
    if (update.line < 1 || update.line > wf.items.length) {
      return
    }

    wf.items[update.line-1].status = update.status;

    if (update.status == api.KitchenOrderItemStatus.KITCHEN_ORDER_ITEM_STATUS_STARTED) {
      started = true
    } else if (update.status == api.KitchenOrderItemStatus.KITCHEN_ORDER_ITEM_STATUS_COMPLETED) {
      started = true
      if (wf.items.find((item) => item.status != api.KitchenOrderItemStatus.KITCHEN_ORDER_ITEM_STATUS_COMPLETED) == undefined) {
        wf.open = false
      }
    } else if (update.status == api.KitchenOrderItemStatus.KITCHEN_ORDER_ITEM_STATUS_FAILED) {
      wf.open = false
    }
  })

  await condition(() => started)
  await notifyStart()
  await condition(() => !wf.open)

  return api.KitchenOrderResult.create();
}
