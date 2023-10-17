import { Client } from '@temporalio/client';
import { Context } from '@temporalio/activity';

export interface Payment {
  AuthCode: string
}

export interface ProcessPaymentInput {
  Token: string
}

export interface ProcessPaymentResult {
  Payment: Payment
}

export interface ProcessPaymentRefundInput {
  Payment: Payment
}

export interface ProcessPaymentRefundResult { }

export interface AddLoyaltyPointsInput {
  Email: string;
  Points: number;
}

export interface AddLoyaltyPointsResult { }

export function createActivities(client: Client) {
  return {
    async AddLoyaltyPoints(input: AddLoyaltyPointsInput) {
      await client.workflow.signalWithStart("Customer", {
        taskQueue: Context.current().info.taskQueue,
        workflowId: `customer:${input.Email}`,
        args: [{ Email: input.Email }],
        signal: "customer-points-add",
        signalArgs: [{ Points: input.Points }],
      });
    },
    async ProcessPayment(_input: ProcessPaymentInput): Promise<ProcessPaymentResult> {
      return { Payment: { AuthCode: "x" } }
    },
    async ProcessPaymentRefund(_input: ProcessPaymentRefundInput): Promise<ProcessPaymentRefundResult> {
      return {}
    }
  };
}
