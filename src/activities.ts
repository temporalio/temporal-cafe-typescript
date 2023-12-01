import { Client } from '@temporalio/client';
import { Context } from '@temporalio/activity';
import { temporalio } from './proto/root';
import api = temporalio.cafe;

export function createActivities(client: Client) {
  return {
    async AddLoyaltyPoints(input: api.AddLoyaltyPointsInput): Promise<api.AddLoyaltyPointsResult> {
      await client.workflow.signalWithStart("Customer", {
        taskQueue: Context.current().info.taskQueue,
        workflowId: `customer:${input.email}`,
        args: [api.CustomerInput.create({ email: input.email })],
        signal: "customer-loyalty-points-earned",
        signalArgs: [api.CustomerLoyaltyPointsEarned.create({ points: input.points })],
      });

      return temporalio.cafe.AddLoyaltyPointsResult.create();
    },
    async ProcessPayment(_input: api.ProcessPaymentInput): Promise<api.ProcessPaymentResult> {
      return api.ProcessPaymentResult.create({ payment: api.Payment.create({ authcode: "x" }) })
    },
    async ProcessPaymentRefund(_input: api.ProcessPaymentRefundInput): Promise<api.ProcessPaymentRefundResult> {
      return api.ProcessPaymentRefundResult.create()
    }
  };
}
