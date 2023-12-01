import { Connection, Client } from '@temporalio/client';
import { Order } from './workflows';
import { temporalio } from './proto';
import api = temporalio.cafe;
import { nanoid } from 'nanoid';

async function run() {
  // Connect to the default Server location
  const connection = await Connection.connect({ address: 'localhost:7233' });
  // In production, pass options to configure TLS and other settings:
  // {
  //   address: 'foo.bar.tmprl.cloud',
  //   tls: {}
  // }

  const client = new Client({
    connection,
    // namespace: 'foo.bar', // connects to 'default' namespace if not specified
  });

  const handle = await client.workflow.start(Order, {
    workflowId: nanoid(),
    taskQueue: 'cafe',
    // type inference works! args: [name: string]
    args: [
      api.OrderInput.create({
        email: 'me@example.com',
        items: [
          api.OrderLineItem.create({
            type: api.ProductType.PRODUCT_TYPE_BEVERAGE,
            name: "Coffee",
            price: 350,
            count: 2,
          }),
        ],
      }),
    ],
  });
  console.log(`Started workflow ${handle.workflowId}`);

  // optional: wait for client result
  console.log(await handle.result());
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
