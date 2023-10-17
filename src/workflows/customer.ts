import { condition, continueAsNew, defineQuery, defineSignal, setHandler, workflowInfo } from "@temporalio/workflow"

export interface CustomerPointsBalanceQuery {
  Points: number
}

export interface CustomerPointsAddSignal {
  Points: number
}

export interface CustomerWorkflowInput {
  Email: string
}

export interface CustomerWorkflowState {
  Points: number
}

const CustomerStartingBalance = 100
export const CustomerPointsBalanceQuery = defineQuery<CustomerPointsBalanceQuery>('customer-points-balance')
export const CustomerPointsAddSignal = defineSignal<[CustomerPointsAddSignal]>('customer-points-add')

export async function Customer(input: CustomerWorkflowInput, inputState: CustomerWorkflowState | undefined): Promise<void> {
  let state: CustomerWorkflowState

  if (inputState) {
    state = inputState
  } else {
    state = { Points: CustomerStartingBalance }
  }

  setHandler(CustomerPointsBalanceQuery, () => {
    return state
  })

  setHandler(CustomerPointsAddSignal, (input: CustomerPointsAddSignal) => {
    state.Points += input.Points
  })

  await condition(() => { return workflowInfo().continueAsNewSuggested })
  await continueAsNew<typeof Customer>(input, state)
}