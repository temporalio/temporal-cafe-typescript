/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["protobuf-sample"] || ($protobuf.roots["protobuf-sample"] = new $protobuf.Root()))
.addJSON({
  temporalio: {
    nested: {
      cafe: {
        options: {
          go_package: "github.com/temporalio/temporal-cafe/api"
        },
        nested: {
          Cafe: {
            methods: {
              Order: {
                requestType: "OrderInput",
                responseType: "OrderResult"
              },
              OrderFulfilmentStartedSignal: {
                requestType: "google.protobuf.Empty",
                responseType: "google.protobuf.Empty"
              },
              KitchenOrder: {
                requestType: "KitchenOrderInput",
                responseType: "KitchenOrderResult"
              },
              KitchenOrderStatusQuery: {
                requestType: "google.protobuf.Empty",
                responseType: "KitchenOrderStatus"
              },
              KitchenOrderItemStatusSignal: {
                requestType: "KitchenOrderItemStatusUpdate",
                responseType: "google.protobuf.Empty"
              },
              BaristaOrder: {
                requestType: "BaristaOrderInput",
                responseType: "BaristaOrderResult"
              },
              BaristaOrderStatusQuery: {
                requestType: "google.protobuf.Empty",
                responseType: "BaristaOrderStatus"
              },
              BaristaOrderItemStatusSignal: {
                requestType: "BaristaOrderItemStatusUpdate",
                responseType: "google.protobuf.Empty"
              },
              CustomerLoyaltyPointsEarnedSignal: {
                requestType: "CustomerLoyaltyPointsEarned",
                responseType: "google.protobuf.Empty"
              },
              CustomerLoyaltyPointsBalanceQuery: {
                requestType: "CustomerLoyaltyPointsBalance",
                responseType: "CustomerLoyaltyPointsBalance"
              }
            }
          },
          ProductType: {
            values: {
              PRODUCT_TYPE_UNKNOWN: 0,
              PRODUCT_TYPE_FOOD: 1,
              PRODUCT_TYPE_BEVERAGE: 2
            }
          },
          OrderLineItem: {
            fields: {
              type: {
                type: "ProductType",
                id: 1
              },
              name: {
                type: "string",
                id: 2
              },
              price: {
                type: "uint32",
                id: 3
              },
              count: {
                type: "uint32",
                id: 4
              }
            }
          },
          OrderInput: {
            fields: {
              email: {
                type: "string",
                id: 1
              },
              paymentToken: {
                type: "string",
                id: 2
              },
              items: {
                rule: "repeated",
                type: "OrderLineItem",
                id: 3
              }
            }
          },
          OrderResult: {
            fields: {}
          },
          KitchenOrderItemStatus: {
            values: {
              KITCHEN_ORDER_ITEM_STATUS_PENDING: 0,
              KITCHEN_ORDER_ITEM_STATUS_STARTED: 1,
              KITCHEN_ORDER_ITEM_STATUS_COMPLETED: 2,
              KITCHEN_ORDER_ITEM_STATUS_FAILED: 3
            }
          },
          KitchenOrderLineItem: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              status: {
                type: "KitchenOrderItemStatus",
                id: 2
              }
            }
          },
          KitchenOrderInput: {
            fields: {
              items: {
                rule: "repeated",
                type: "OrderLineItem",
                id: 1
              }
            }
          },
          KitchenOrderItemStatusUpdate: {
            fields: {
              line: {
                type: "uint32",
                id: 1
              },
              status: {
                type: "KitchenOrderItemStatus",
                id: 2
              }
            }
          },
          KitchenOrderStatus: {
            fields: {
              open: {
                type: "bool",
                id: 1
              },
              items: {
                rule: "repeated",
                type: "KitchenOrderLineItem",
                id: 2
              }
            }
          },
          KitchenOrderResult: {
            fields: {}
          },
          BaristaOrderItemStatus: {
            values: {
              BARISTA_ORDER_ITEM_STATUS_PENDING: 0,
              BARISTA_ORDER_ITEM_STATUS_STARTED: 1,
              BARISTA_ORDER_ITEM_STATUS_COMPLETED: 2,
              BARISTA_ORDER_ITEM_STATUS_FAILED: 3
            }
          },
          BaristaOrderLineItem: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              status: {
                type: "BaristaOrderItemStatus",
                id: 2
              }
            }
          },
          BaristaOrderInput: {
            fields: {
              items: {
                rule: "repeated",
                type: "OrderLineItem",
                id: 1
              }
            }
          },
          BaristaOrderItemStatusUpdate: {
            fields: {
              line: {
                type: "uint32",
                id: 1
              },
              status: {
                type: "BaristaOrderItemStatus",
                id: 2
              }
            }
          },
          BaristaOrderStatus: {
            fields: {
              open: {
                type: "bool",
                id: 1
              },
              items: {
                rule: "repeated",
                type: "BaristaOrderLineItem",
                id: 2
              }
            }
          },
          BaristaOrderResult: {
            fields: {}
          },
          CustomerLoyaltyPointsBalance: {
            fields: {
              points: {
                type: "uint32",
                id: 1
              }
            }
          },
          CustomerLoyaltyPointsEarned: {
            fields: {
              points: {
                type: "uint32",
                id: 1
              }
            }
          },
          CustomerInput: {
            fields: {
              email: {
                type: "string",
                id: 1
              }
            }
          },
          Payment: {
            fields: {
              authcode: {
                type: "string",
                id: 1
              }
            }
          },
          ProcessPaymentInput: {
            fields: {
              token: {
                type: "string",
                id: 1
              }
            }
          },
          ProcessPaymentResult: {
            fields: {
              payment: {
                type: "Payment",
                id: 1
              }
            }
          },
          ProcessPaymentRefundInput: {
            fields: {
              payment: {
                type: "Payment",
                id: 1
              }
            }
          },
          ProcessPaymentRefundResult: {
            fields: {}
          },
          AddLoyaltyPointsInput: {
            fields: {
              email: {
                type: "string",
                id: 1
              },
              points: {
                type: "uint32",
                id: 2
              }
            }
          },
          AddLoyaltyPointsResult: {
            fields: {}
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Empty: {
            fields: {}
          }
        }
      }
    }
  }
});

module.exports = $root;
