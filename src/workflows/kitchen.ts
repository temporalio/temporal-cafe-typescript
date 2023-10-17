import {
  condition,
  defineQuery,
  defineSignal,
  getExternalWorkflowHandle,
  setHandler,
  workflowInfo
} from '@temporalio/workflow';
import { OrderLineItem } from './order';

export const KitchenGetStatusQuery = defineQuery<KitchenOrderWorkflowStatus>('getStatus')

export const KitchenItemStartedSignal = defineSignal<[KitchenOrderItemStartedSignal]>('kitchen-item-started')
export const KitchenItemCompletedSignal = defineSignal<[KitchenOrderItemCompletedSignal]>('kitchen-item-completed')
export const KitchenItemFailedSignal = defineSignal<[KitchenOrderItemFailedSignal]>('kitchen-item-failed')

type KitchenOrderItemStatus = "pending" | "started" | "completed" | "failed"

export interface KitchenOrderLineItem {
  Name: string;
  Status: KitchenOrderItemStatus;
}

export interface KitchenOrderWorkflowInput {
  Items: Array<OrderLineItem>;
}

export interface KitchenOrderItemStartedSignal {
  Line: number;
}

export interface KitchenOrderItemCompletedSignal {
  Line: number;
}

export interface KitchenOrderItemFailedSignal {
  Line: number;
}

export interface KitchenOrderWorkflowStatus {
  Open: boolean;
  Items: Array<KitchenOrderLineItem>;
}

export interface KitchenOrderWorkflowResult {
}

function newWorkflowState(input: KitchenOrderWorkflowInput): KitchenOrderWorkflowStatus {
  let items = input.Items.flatMap<KitchenOrderLineItem>(
    (item) => Array(item.Count).fill({ Name: item.Name, Status: "pending" })
  )

  return {
    Open: true,
    Items: items,
  }
}

async function notifyStart() {
  const pid = workflowInfo().parent?.workflowId
  if (!pid) { return }

  const handle = getExternalWorkflowHandle(pid)
  await handle.signal("order-started")
}

export async function KitchenOrder(input: KitchenOrderWorkflowInput): Promise<KitchenOrderWorkflowResult> {
  let wf = newWorkflowState(input)
  let started = false;

  setHandler(KitchenGetStatusQuery, () => {
    return wf;
  })

  setHandler(KitchenItemStartedSignal, ({ Line }: KitchenOrderItemStartedSignal) => {
    wf.Items[Line - 1].Status = "started"
    started = true
  })

  setHandler(KitchenItemCompletedSignal, ({ Line }: KitchenOrderItemCompletedSignal) => {
    wf.Items[Line - 1].Status = "completed"
    if (wf.Items.find((item) => item.Status != "completed") == undefined) {
      wf.Open = false
    }
    started = true
  })

  setHandler(KitchenItemFailedSignal, ({ Line }: KitchenOrderItemFailedSignal) => {
    wf.Items[Line - 1].Status = "failed"
    wf.Open = false
    throw new Error(`item ${wf.Items[Line - 1].Name} failed`)
  })

  await condition(() => started)
  await notifyStart()
  await condition(() => !wf.Open)

  return {};
}
