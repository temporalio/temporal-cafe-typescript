import { condition, continueAsNew, defineQuery, defineSignal, setHandler, workflowInfo } from "@temporalio/workflow"
import { temporalio } from '../api/root';
import api = temporalio.cafe;

const CustomerStartingBalance = 100
export const CustomerPointsBalanceQuery = defineQuery<api.CustomerLoyaltyPointsBalance>('customer-loyalty-points-balance')
export const CustomerPointsAddSignal = defineSignal<[api.CustomerLoyaltyPointsEarned]>('customer-loyalty-points-earned')

interface CustomerWorkflowState {
  Points: number;
}

export async function Customer(input: api.CustomerInput, inputState: CustomerWorkflowState | undefined) {
  let state: api.CustomerLoyaltyPointsBalance

  if (inputState) {
    state = api.CustomerLoyaltyPointsBalance.create({ points: inputState.Points })
  } else {
    state = api.CustomerLoyaltyPointsBalance.create({ points: CustomerStartingBalance })
  }

  setHandler(CustomerPointsBalanceQuery, () => {
    return state
  })

  setHandler(CustomerPointsAddSignal, (input: api.CustomerLoyaltyPointsEarned) => {
    state.points += input.points
  })

  await condition(() => { return workflowInfo().continueAsNewSuggested })
  await continueAsNew<typeof Customer>(input, { Points: state.points })
}