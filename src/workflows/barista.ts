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

export const BaristaOrderStatusQuery = defineQuery<api.BaristaOrderStatus>('status')
export const BaristaOrderItemStatusSignal = defineSignal<[api.BaristaOrderItemStatusUpdate]>('barista-order-item-status')

function newWorkflowState(input: api.BaristaOrderInput): api.BaristaOrderStatus {
  const items = input.items.flatMap<api.BaristaOrderLineItem>(
    (item) => Array(Number(item.count)).fill(api.BaristaOrderLineItem.create({ name: item.name }))
  )

  return api.BaristaOrderStatus.create({
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

export async function BaristaOrder(input: api.BaristaOrderInput): Promise<api.BaristaOrderResult> {
  const wf = newWorkflowState(input)
  let started = false;

  setHandler(BaristaOrderStatusQuery, () => {
    return wf;
  })

  setHandler(BaristaOrderItemStatusSignal, (update: api.BaristaOrderItemStatusUpdate) => {
    if (update.line < 1 || update.line > wf.items.length) {
      return
    }

    wf.items[update.line-1].status = update.status;

    if (update.status == api.BaristaOrderItemStatus.BARISTA_ORDER_ITEM_STATUS_STARTED) {
      started = true
    } else if (update.status == api.BaristaOrderItemStatus.BARISTA_ORDER_ITEM_STATUS_COMPLETED) {
      started = true
      if (wf.items.find((item) => item.status != api.BaristaOrderItemStatus.BARISTA_ORDER_ITEM_STATUS_COMPLETED) == undefined) {
        wf.open = false
      }
    } else if (update.status == api.BaristaOrderItemStatus.BARISTA_ORDER_ITEM_STATUS_FAILED) {
      wf.open = false
    }
  })

  await condition(() => started)
  await notifyStart()
  await condition(() => !wf.open)

  return api.BaristaOrderResult.create();
}
