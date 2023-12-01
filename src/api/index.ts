import express from 'express'
import * as api from './types'
import { temporalio } from '../proto';
import proto = temporalio.cafe;
import { Connection, Client } from '@temporalio/client';
import { Order } from '../workflows';
import { nanoid } from 'nanoid';

const app = express()
app.use(express.json());
const port = 8084
var client: Client

// r.HandleFunc("/menu", h.handleMenuFetch).Methods("GET").Name("menu_fetch")

// r.HandleFunc("/orders", h.handleOrdersCreate).Methods("POST").Name("orders_create")
// r.HandleFunc("/barista/orders", h.handleBaristaOrderList).Methods("GET").Name("barista_orders_list")
// r.HandleFunc("/barista/orders/{id}/{item}/status", h.handleBaristaOrderItemStatusUpdate).Methods("POST").Name("barista_order_item_status_update")

// r.HandleFunc("/kitchen/orders", h.handleKitchenOrderList).Methods("GET").Name("kitchen_orders_list")
// r.HandleFunc("/kitchen/orders/{id}/{item}/status", h.handleKitchenOrderItemStatusUpdate).Methods("POST").Name("kitchen_order_item_status_update")

app.get('/menu', (_, res) => {
  let menu: api.Menu = {
    Items: [
      {Name: "Coffee", Type: "beverage", Price: 300},
			{Name: "Latte", Type: "beverage", Price: 350},
			{Name: "Milkshake", Type: "beverage", Price: 450},
			{Name: "Bagel", Type: "food", Price: 500},
			{Name: "Sandwich", Type: "food", Price: 600},
    ]
  }

  res.send(menu)
})

app.post('/orders', async (req, res) => {
  const order = proto.OrderInput.create({
    name: req.body.Name,
    email: req.body.Email,
    paymentToken: 'fake',
    items: req.body.Items.map((i: api.OrderItem) => {
      return proto.OrderLineItem.create({
        type: proto.ProductType["PRODUCT_TYPE_" + i.Type.toUpperCase() as keyof typeof proto.ProductType],
        name: i.Name,
        price: i.Price,
        count: i.Count,
      })
    }),
  })

  return client.workflow.start(Order, {
    workflowId: nanoid(),
    taskQueue: 'cafe',
    args: [order],
  }).then((_) => {
    res.sendStatus(201)
  }).catch((e) => {
    console.log(e)

    res.sendStatus(500)
  })
})

async function run() {
  const connection = await Connection.connect({ address: 'localhost:7233' });
  client = new Client({
    connection,
    dataConverter: { payloadConverterPath: require.resolve('../proto/payload-converter') },
    // namespace: 'foo.bar', // connects to 'default' namespace if not specified
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

run().catch((e) => {
  console.log(e)
  process.exit(1)
})