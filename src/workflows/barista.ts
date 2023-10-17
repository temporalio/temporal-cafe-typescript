import {
  condition,
  defineQuery,
  defineSignal,
  getExternalWorkflowHandle,
  setHandler,
  workflowInfo
} from '@temporalio/workflow';
import { OrderLineItem } from './order';

export const BaristaGetStatusQuery = defineQuery<BaristaOrderWorkflowStatus>('getStatus')

export const BaristaItemStartedSignal = defineSignal<[BaristaOrderItemStartedSignal]>('barista-item-started')
export const BaristaItemCompletedSignal = defineSignal<[BaristaOrderItemCompletedSignal]>('barista-item-completed')
export const BaristaItemFailedSignal = defineSignal<[BaristaOrderItemFailedSignal]>('barista-item-failed')

type BaristaOrderItemStatus = "pending" | "started" | "completed" | "failed"

export interface BaristaOrderLineItem {
  Name: string;
  Status: BaristaOrderItemStatus;
}

export interface BaristaOrderWorkflowInput {
  Items: Array<OrderLineItem>;
}

export interface BaristaOrderItemStartedSignal {
  Line: number;
}

export interface BaristaOrderItemCompletedSignal {
  Line: number;
}

export interface BaristaOrderItemFailedSignal {
  Line: number;
}

export interface BaristaOrderWorkflowStatus {
  Open: boolean;
  Items: Array<BaristaOrderLineItem>;
}

export interface BaristaOrderWorkflowResult {
}

function newWorkflowState(input: BaristaOrderWorkflowInput): BaristaOrderWorkflowStatus {
  let items = input.Items.flatMap<BaristaOrderLineItem>(
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

export async function BaristaOrder(input: BaristaOrderWorkflowInput): Promise<BaristaOrderWorkflowResult> {
  let wf = newWorkflowState(input)
  let started = false;

  setHandler(BaristaGetStatusQuery, () => {
    return wf;
  })

  setHandler(BaristaItemStartedSignal, async ({ Line }: BaristaOrderItemStartedSignal) => {
    wf.Items[Line - 1].Status = "started";
    started = true
  })

  setHandler(BaristaItemCompletedSignal, async ({ Line }: BaristaOrderItemCompletedSignal) => {
    wf.Items[Line - 1].Status = "completed"
    if (wf.Items.find((item) => item.Status != "completed") == undefined) {
      wf.Open = false
    }
    started = true
  })

  setHandler(BaristaItemFailedSignal, ({ Line }: BaristaOrderItemFailedSignal) => {
    wf.Items[Line - 1].Status = "failed"
    wf.Open = false
    throw new Error(`item ${wf.Items[Line - 1].Name} failed`)
  })

  await condition(() => started)
  await notifyStart()
  await condition(() => !wf.Open)

  return {};
}
