import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace temporalio. */
export namespace temporalio {

    /** Namespace cafe. */
    namespace cafe {

        /** Represents a Cafe */
        class Cafe extends $protobuf.rpc.Service {

            /**
             * Constructs a new Cafe service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Cafe service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Cafe;

            /**
             * Calls Order.
             * @param request OrderInput message or plain object
             * @param callback Node-style callback called with the error, if any, and OrderResult
             */
            public order(request: temporalio.cafe.IOrderInput, callback: temporalio.cafe.Cafe.OrderCallback): void;

            /**
             * Calls Order.
             * @param request OrderInput message or plain object
             * @returns Promise
             */
            public order(request: temporalio.cafe.IOrderInput): Promise<temporalio.cafe.OrderResult>;

            /**
             * Calls OrderFulfilmentStartedSignal.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public orderFulfilmentStartedSignal(request: google.protobuf.IEmpty, callback: temporalio.cafe.Cafe.OrderFulfilmentStartedSignalCallback): void;

            /**
             * Calls OrderFulfilmentStartedSignal.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public orderFulfilmentStartedSignal(request: google.protobuf.IEmpty): Promise<google.protobuf.Empty>;

            /**
             * Calls KitchenOrder.
             * @param request KitchenOrderInput message or plain object
             * @param callback Node-style callback called with the error, if any, and KitchenOrderResult
             */
            public kitchenOrder(request: temporalio.cafe.IKitchenOrderInput, callback: temporalio.cafe.Cafe.KitchenOrderCallback): void;

            /**
             * Calls KitchenOrder.
             * @param request KitchenOrderInput message or plain object
             * @returns Promise
             */
            public kitchenOrder(request: temporalio.cafe.IKitchenOrderInput): Promise<temporalio.cafe.KitchenOrderResult>;

            /**
             * Calls KitchenOrderStatusQuery.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and KitchenOrderStatus
             */
            public kitchenOrderStatusQuery(request: google.protobuf.IEmpty, callback: temporalio.cafe.Cafe.KitchenOrderStatusQueryCallback): void;

            /**
             * Calls KitchenOrderStatusQuery.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public kitchenOrderStatusQuery(request: google.protobuf.IEmpty): Promise<temporalio.cafe.KitchenOrderStatus>;

            /**
             * Calls KitchenOrderItemStatusSignal.
             * @param request KitchenOrderItemStatusUpdate message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public kitchenOrderItemStatusSignal(request: temporalio.cafe.IKitchenOrderItemStatusUpdate, callback: temporalio.cafe.Cafe.KitchenOrderItemStatusSignalCallback): void;

            /**
             * Calls KitchenOrderItemStatusSignal.
             * @param request KitchenOrderItemStatusUpdate message or plain object
             * @returns Promise
             */
            public kitchenOrderItemStatusSignal(request: temporalio.cafe.IKitchenOrderItemStatusUpdate): Promise<google.protobuf.Empty>;

            /**
             * Calls BaristaOrder.
             * @param request BaristaOrderInput message or plain object
             * @param callback Node-style callback called with the error, if any, and BaristaOrderResult
             */
            public baristaOrder(request: temporalio.cafe.IBaristaOrderInput, callback: temporalio.cafe.Cafe.BaristaOrderCallback): void;

            /**
             * Calls BaristaOrder.
             * @param request BaristaOrderInput message or plain object
             * @returns Promise
             */
            public baristaOrder(request: temporalio.cafe.IBaristaOrderInput): Promise<temporalio.cafe.BaristaOrderResult>;

            /**
             * Calls BaristaOrderStatusQuery.
             * @param request Empty message or plain object
             * @param callback Node-style callback called with the error, if any, and BaristaOrderStatus
             */
            public baristaOrderStatusQuery(request: google.protobuf.IEmpty, callback: temporalio.cafe.Cafe.BaristaOrderStatusQueryCallback): void;

            /**
             * Calls BaristaOrderStatusQuery.
             * @param request Empty message or plain object
             * @returns Promise
             */
            public baristaOrderStatusQuery(request: google.protobuf.IEmpty): Promise<temporalio.cafe.BaristaOrderStatus>;

            /**
             * Calls BaristaOrderItemStatusSignal.
             * @param request BaristaOrderItemStatusUpdate message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public baristaOrderItemStatusSignal(request: temporalio.cafe.IBaristaOrderItemStatusUpdate, callback: temporalio.cafe.Cafe.BaristaOrderItemStatusSignalCallback): void;

            /**
             * Calls BaristaOrderItemStatusSignal.
             * @param request BaristaOrderItemStatusUpdate message or plain object
             * @returns Promise
             */
            public baristaOrderItemStatusSignal(request: temporalio.cafe.IBaristaOrderItemStatusUpdate): Promise<google.protobuf.Empty>;

            /**
             * Calls CustomerLoyaltyPointsEarnedSignal.
             * @param request CustomerLoyaltyPointsEarned message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public customerLoyaltyPointsEarnedSignal(request: temporalio.cafe.ICustomerLoyaltyPointsEarned, callback: temporalio.cafe.Cafe.CustomerLoyaltyPointsEarnedSignalCallback): void;

            /**
             * Calls CustomerLoyaltyPointsEarnedSignal.
             * @param request CustomerLoyaltyPointsEarned message or plain object
             * @returns Promise
             */
            public customerLoyaltyPointsEarnedSignal(request: temporalio.cafe.ICustomerLoyaltyPointsEarned): Promise<google.protobuf.Empty>;

            /**
             * Calls CustomerLoyaltyPointsBalanceQuery.
             * @param request CustomerLoyaltyPointsBalance message or plain object
             * @param callback Node-style callback called with the error, if any, and CustomerLoyaltyPointsBalance
             */
            public customerLoyaltyPointsBalanceQuery(request: temporalio.cafe.ICustomerLoyaltyPointsBalance, callback: temporalio.cafe.Cafe.CustomerLoyaltyPointsBalanceQueryCallback): void;

            /**
             * Calls CustomerLoyaltyPointsBalanceQuery.
             * @param request CustomerLoyaltyPointsBalance message or plain object
             * @returns Promise
             */
            public customerLoyaltyPointsBalanceQuery(request: temporalio.cafe.ICustomerLoyaltyPointsBalance): Promise<temporalio.cafe.CustomerLoyaltyPointsBalance>;
        }

        namespace Cafe {

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#order}.
             * @param error Error, if any
             * @param [response] OrderResult
             */
            type OrderCallback = (error: (Error|null), response?: temporalio.cafe.OrderResult) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#orderFulfilmentStartedSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type OrderFulfilmentStartedSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#kitchenOrder}.
             * @param error Error, if any
             * @param [response] KitchenOrderResult
             */
            type KitchenOrderCallback = (error: (Error|null), response?: temporalio.cafe.KitchenOrderResult) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#kitchenOrderStatusQuery}.
             * @param error Error, if any
             * @param [response] KitchenOrderStatus
             */
            type KitchenOrderStatusQueryCallback = (error: (Error|null), response?: temporalio.cafe.KitchenOrderStatus) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#kitchenOrderItemStatusSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type KitchenOrderItemStatusSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#baristaOrder}.
             * @param error Error, if any
             * @param [response] BaristaOrderResult
             */
            type BaristaOrderCallback = (error: (Error|null), response?: temporalio.cafe.BaristaOrderResult) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#baristaOrderStatusQuery}.
             * @param error Error, if any
             * @param [response] BaristaOrderStatus
             */
            type BaristaOrderStatusQueryCallback = (error: (Error|null), response?: temporalio.cafe.BaristaOrderStatus) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#baristaOrderItemStatusSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type BaristaOrderItemStatusSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#customerLoyaltyPointsEarnedSignal}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CustomerLoyaltyPointsEarnedSignalCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link temporalio.cafe.Cafe#customerLoyaltyPointsBalanceQuery}.
             * @param error Error, if any
             * @param [response] CustomerLoyaltyPointsBalance
             */
            type CustomerLoyaltyPointsBalanceQueryCallback = (error: (Error|null), response?: temporalio.cafe.CustomerLoyaltyPointsBalance) => void;
        }

        /** ProductType enum. */
        enum ProductType {
            PRODUCT_TYPE_UNKNOWN = 0,
            PRODUCT_TYPE_FOOD = 1,
            PRODUCT_TYPE_BEVERAGE = 2
        }

        /** Properties of a Menu. */
        interface IMenu {

            /** Menu items */
            items?: (temporalio.cafe.IMenuItem[]|null);
        }

        /** Represents a Menu. */
        class Menu implements IMenu {

            /**
             * Constructs a new Menu.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IMenu);

            /** Menu items. */
            public items: temporalio.cafe.IMenuItem[];

            /**
             * Creates a new Menu instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Menu instance
             */
            public static create(properties?: temporalio.cafe.IMenu): temporalio.cafe.Menu;

            /**
             * Encodes the specified Menu message. Does not implicitly {@link temporalio.cafe.Menu.verify|verify} messages.
             * @param message Menu message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IMenu, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Menu message, length delimited. Does not implicitly {@link temporalio.cafe.Menu.verify|verify} messages.
             * @param message Menu message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IMenu, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Menu message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Menu
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.Menu;

            /**
             * Decodes a Menu message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Menu
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.Menu;

            /**
             * Verifies a Menu message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Menu message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Menu
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.Menu;

            /**
             * Creates a plain object from a Menu message. Also converts values to other types if specified.
             * @param message Menu
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.Menu, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Menu to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Menu
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MenuItem. */
        interface IMenuItem {

            /** MenuItem type */
            type?: (temporalio.cafe.ProductType|null);

            /** MenuItem name */
            name?: (string|null);

            /** MenuItem price */
            price?: (number|null);
        }

        /** Represents a MenuItem. */
        class MenuItem implements IMenuItem {

            /**
             * Constructs a new MenuItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IMenuItem);

            /** MenuItem type. */
            public type: temporalio.cafe.ProductType;

            /** MenuItem name. */
            public name: string;

            /** MenuItem price. */
            public price: number;

            /**
             * Creates a new MenuItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MenuItem instance
             */
            public static create(properties?: temporalio.cafe.IMenuItem): temporalio.cafe.MenuItem;

            /**
             * Encodes the specified MenuItem message. Does not implicitly {@link temporalio.cafe.MenuItem.verify|verify} messages.
             * @param message MenuItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IMenuItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MenuItem message, length delimited. Does not implicitly {@link temporalio.cafe.MenuItem.verify|verify} messages.
             * @param message MenuItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IMenuItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MenuItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MenuItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.MenuItem;

            /**
             * Decodes a MenuItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MenuItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.MenuItem;

            /**
             * Verifies a MenuItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MenuItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MenuItem
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.MenuItem;

            /**
             * Creates a plain object from a MenuItem message. Also converts values to other types if specified.
             * @param message MenuItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.MenuItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MenuItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MenuItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrderLineItem. */
        interface IOrderLineItem {

            /** OrderLineItem type */
            type?: (temporalio.cafe.ProductType|null);

            /** OrderLineItem name */
            name?: (string|null);

            /** OrderLineItem price */
            price?: (number|null);

            /** OrderLineItem count */
            count?: (number|null);
        }

        /** Represents an OrderLineItem. */
        class OrderLineItem implements IOrderLineItem {

            /**
             * Constructs a new OrderLineItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IOrderLineItem);

            /** OrderLineItem type. */
            public type: temporalio.cafe.ProductType;

            /** OrderLineItem name. */
            public name: string;

            /** OrderLineItem price. */
            public price: number;

            /** OrderLineItem count. */
            public count: number;

            /**
             * Creates a new OrderLineItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderLineItem instance
             */
            public static create(properties?: temporalio.cafe.IOrderLineItem): temporalio.cafe.OrderLineItem;

            /**
             * Encodes the specified OrderLineItem message. Does not implicitly {@link temporalio.cafe.OrderLineItem.verify|verify} messages.
             * @param message OrderLineItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IOrderLineItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderLineItem message, length delimited. Does not implicitly {@link temporalio.cafe.OrderLineItem.verify|verify} messages.
             * @param message OrderLineItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IOrderLineItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderLineItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderLineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.OrderLineItem;

            /**
             * Decodes an OrderLineItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderLineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.OrderLineItem;

            /**
             * Verifies an OrderLineItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderLineItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderLineItem
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.OrderLineItem;

            /**
             * Creates a plain object from an OrderLineItem message. Also converts values to other types if specified.
             * @param message OrderLineItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.OrderLineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderLineItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrderLineItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrderInput. */
        interface IOrderInput {

            /** OrderInput email */
            email?: (string|null);

            /** OrderInput name */
            name?: (string|null);

            /** OrderInput paymentToken */
            paymentToken?: (string|null);

            /** OrderInput items */
            items?: (temporalio.cafe.IOrderLineItem[]|null);
        }

        /** Represents an OrderInput. */
        class OrderInput implements IOrderInput {

            /**
             * Constructs a new OrderInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IOrderInput);

            /** OrderInput email. */
            public email: string;

            /** OrderInput name. */
            public name: string;

            /** OrderInput paymentToken. */
            public paymentToken: string;

            /** OrderInput items. */
            public items: temporalio.cafe.IOrderLineItem[];

            /**
             * Creates a new OrderInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderInput instance
             */
            public static create(properties?: temporalio.cafe.IOrderInput): temporalio.cafe.OrderInput;

            /**
             * Encodes the specified OrderInput message. Does not implicitly {@link temporalio.cafe.OrderInput.verify|verify} messages.
             * @param message OrderInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderInput message, length delimited. Does not implicitly {@link temporalio.cafe.OrderInput.verify|verify} messages.
             * @param message OrderInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.OrderInput;

            /**
             * Decodes an OrderInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.OrderInput;

            /**
             * Verifies an OrderInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.OrderInput;

            /**
             * Creates a plain object from an OrderInput message. Also converts values to other types if specified.
             * @param message OrderInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.OrderInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrderInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an OrderResult. */
        interface IOrderResult {
        }

        /** Represents an OrderResult. */
        class OrderResult implements IOrderResult {

            /**
             * Constructs a new OrderResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IOrderResult);

            /**
             * Creates a new OrderResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OrderResult instance
             */
            public static create(properties?: temporalio.cafe.IOrderResult): temporalio.cafe.OrderResult;

            /**
             * Encodes the specified OrderResult message. Does not implicitly {@link temporalio.cafe.OrderResult.verify|verify} messages.
             * @param message OrderResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IOrderResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OrderResult message, length delimited. Does not implicitly {@link temporalio.cafe.OrderResult.verify|verify} messages.
             * @param message OrderResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IOrderResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OrderResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.OrderResult;

            /**
             * Decodes an OrderResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.OrderResult;

            /**
             * Verifies an OrderResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OrderResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OrderResult
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.OrderResult;

            /**
             * Creates a plain object from an OrderResult message. Also converts values to other types if specified.
             * @param message OrderResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.OrderResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OrderResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OrderResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** KitchenOrderItemStatus enum. */
        enum KitchenOrderItemStatus {
            KITCHEN_ORDER_ITEM_STATUS_PENDING = 0,
            KITCHEN_ORDER_ITEM_STATUS_STARTED = 1,
            KITCHEN_ORDER_ITEM_STATUS_COMPLETED = 2,
            KITCHEN_ORDER_ITEM_STATUS_FAILED = 3
        }

        /** Properties of a KitchenOrderLineItem. */
        interface IKitchenOrderLineItem {

            /** KitchenOrderLineItem name */
            name?: (string|null);

            /** KitchenOrderLineItem status */
            status?: (temporalio.cafe.KitchenOrderItemStatus|null);
        }

        /** Represents a KitchenOrderLineItem. */
        class KitchenOrderLineItem implements IKitchenOrderLineItem {

            /**
             * Constructs a new KitchenOrderLineItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IKitchenOrderLineItem);

            /** KitchenOrderLineItem name. */
            public name: string;

            /** KitchenOrderLineItem status. */
            public status: temporalio.cafe.KitchenOrderItemStatus;

            /**
             * Creates a new KitchenOrderLineItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KitchenOrderLineItem instance
             */
            public static create(properties?: temporalio.cafe.IKitchenOrderLineItem): temporalio.cafe.KitchenOrderLineItem;

            /**
             * Encodes the specified KitchenOrderLineItem message. Does not implicitly {@link temporalio.cafe.KitchenOrderLineItem.verify|verify} messages.
             * @param message KitchenOrderLineItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IKitchenOrderLineItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KitchenOrderLineItem message, length delimited. Does not implicitly {@link temporalio.cafe.KitchenOrderLineItem.verify|verify} messages.
             * @param message KitchenOrderLineItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IKitchenOrderLineItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KitchenOrderLineItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KitchenOrderLineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.KitchenOrderLineItem;

            /**
             * Decodes a KitchenOrderLineItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KitchenOrderLineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.KitchenOrderLineItem;

            /**
             * Verifies a KitchenOrderLineItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KitchenOrderLineItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KitchenOrderLineItem
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.KitchenOrderLineItem;

            /**
             * Creates a plain object from a KitchenOrderLineItem message. Also converts values to other types if specified.
             * @param message KitchenOrderLineItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.KitchenOrderLineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KitchenOrderLineItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KitchenOrderLineItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KitchenOrderInput. */
        interface IKitchenOrderInput {

            /** KitchenOrderInput name */
            name?: (string|null);

            /** KitchenOrderInput items */
            items?: (temporalio.cafe.IOrderLineItem[]|null);
        }

        /** Represents a KitchenOrderInput. */
        class KitchenOrderInput implements IKitchenOrderInput {

            /**
             * Constructs a new KitchenOrderInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IKitchenOrderInput);

            /** KitchenOrderInput name. */
            public name: string;

            /** KitchenOrderInput items. */
            public items: temporalio.cafe.IOrderLineItem[];

            /**
             * Creates a new KitchenOrderInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KitchenOrderInput instance
             */
            public static create(properties?: temporalio.cafe.IKitchenOrderInput): temporalio.cafe.KitchenOrderInput;

            /**
             * Encodes the specified KitchenOrderInput message. Does not implicitly {@link temporalio.cafe.KitchenOrderInput.verify|verify} messages.
             * @param message KitchenOrderInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IKitchenOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KitchenOrderInput message, length delimited. Does not implicitly {@link temporalio.cafe.KitchenOrderInput.verify|verify} messages.
             * @param message KitchenOrderInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IKitchenOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KitchenOrderInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KitchenOrderInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.KitchenOrderInput;

            /**
             * Decodes a KitchenOrderInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KitchenOrderInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.KitchenOrderInput;

            /**
             * Verifies a KitchenOrderInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KitchenOrderInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KitchenOrderInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.KitchenOrderInput;

            /**
             * Creates a plain object from a KitchenOrderInput message. Also converts values to other types if specified.
             * @param message KitchenOrderInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.KitchenOrderInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KitchenOrderInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KitchenOrderInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KitchenOrderItemStatusUpdate. */
        interface IKitchenOrderItemStatusUpdate {

            /** KitchenOrderItemStatusUpdate line */
            line?: (number|null);

            /** KitchenOrderItemStatusUpdate status */
            status?: (temporalio.cafe.KitchenOrderItemStatus|null);
        }

        /** Represents a KitchenOrderItemStatusUpdate. */
        class KitchenOrderItemStatusUpdate implements IKitchenOrderItemStatusUpdate {

            /**
             * Constructs a new KitchenOrderItemStatusUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IKitchenOrderItemStatusUpdate);

            /** KitchenOrderItemStatusUpdate line. */
            public line: number;

            /** KitchenOrderItemStatusUpdate status. */
            public status: temporalio.cafe.KitchenOrderItemStatus;

            /**
             * Creates a new KitchenOrderItemStatusUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KitchenOrderItemStatusUpdate instance
             */
            public static create(properties?: temporalio.cafe.IKitchenOrderItemStatusUpdate): temporalio.cafe.KitchenOrderItemStatusUpdate;

            /**
             * Encodes the specified KitchenOrderItemStatusUpdate message. Does not implicitly {@link temporalio.cafe.KitchenOrderItemStatusUpdate.verify|verify} messages.
             * @param message KitchenOrderItemStatusUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IKitchenOrderItemStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KitchenOrderItemStatusUpdate message, length delimited. Does not implicitly {@link temporalio.cafe.KitchenOrderItemStatusUpdate.verify|verify} messages.
             * @param message KitchenOrderItemStatusUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IKitchenOrderItemStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KitchenOrderItemStatusUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KitchenOrderItemStatusUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.KitchenOrderItemStatusUpdate;

            /**
             * Decodes a KitchenOrderItemStatusUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KitchenOrderItemStatusUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.KitchenOrderItemStatusUpdate;

            /**
             * Verifies a KitchenOrderItemStatusUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KitchenOrderItemStatusUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KitchenOrderItemStatusUpdate
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.KitchenOrderItemStatusUpdate;

            /**
             * Creates a plain object from a KitchenOrderItemStatusUpdate message. Also converts values to other types if specified.
             * @param message KitchenOrderItemStatusUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.KitchenOrderItemStatusUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KitchenOrderItemStatusUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KitchenOrderItemStatusUpdate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KitchenOrderStatus. */
        interface IKitchenOrderStatus {

            /** KitchenOrderStatus name */
            name?: (string|null);

            /** KitchenOrderStatus open */
            open?: (boolean|null);

            /** KitchenOrderStatus items */
            items?: (temporalio.cafe.IKitchenOrderLineItem[]|null);
        }

        /** Represents a KitchenOrderStatus. */
        class KitchenOrderStatus implements IKitchenOrderStatus {

            /**
             * Constructs a new KitchenOrderStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IKitchenOrderStatus);

            /** KitchenOrderStatus name. */
            public name: string;

            /** KitchenOrderStatus open. */
            public open: boolean;

            /** KitchenOrderStatus items. */
            public items: temporalio.cafe.IKitchenOrderLineItem[];

            /**
             * Creates a new KitchenOrderStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KitchenOrderStatus instance
             */
            public static create(properties?: temporalio.cafe.IKitchenOrderStatus): temporalio.cafe.KitchenOrderStatus;

            /**
             * Encodes the specified KitchenOrderStatus message. Does not implicitly {@link temporalio.cafe.KitchenOrderStatus.verify|verify} messages.
             * @param message KitchenOrderStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IKitchenOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KitchenOrderStatus message, length delimited. Does not implicitly {@link temporalio.cafe.KitchenOrderStatus.verify|verify} messages.
             * @param message KitchenOrderStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IKitchenOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KitchenOrderStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KitchenOrderStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.KitchenOrderStatus;

            /**
             * Decodes a KitchenOrderStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KitchenOrderStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.KitchenOrderStatus;

            /**
             * Verifies a KitchenOrderStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KitchenOrderStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KitchenOrderStatus
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.KitchenOrderStatus;

            /**
             * Creates a plain object from a KitchenOrderStatus message. Also converts values to other types if specified.
             * @param message KitchenOrderStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.KitchenOrderStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KitchenOrderStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KitchenOrderStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a KitchenOrderResult. */
        interface IKitchenOrderResult {
        }

        /** Represents a KitchenOrderResult. */
        class KitchenOrderResult implements IKitchenOrderResult {

            /**
             * Constructs a new KitchenOrderResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IKitchenOrderResult);

            /**
             * Creates a new KitchenOrderResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns KitchenOrderResult instance
             */
            public static create(properties?: temporalio.cafe.IKitchenOrderResult): temporalio.cafe.KitchenOrderResult;

            /**
             * Encodes the specified KitchenOrderResult message. Does not implicitly {@link temporalio.cafe.KitchenOrderResult.verify|verify} messages.
             * @param message KitchenOrderResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IKitchenOrderResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified KitchenOrderResult message, length delimited. Does not implicitly {@link temporalio.cafe.KitchenOrderResult.verify|verify} messages.
             * @param message KitchenOrderResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IKitchenOrderResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a KitchenOrderResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns KitchenOrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.KitchenOrderResult;

            /**
             * Decodes a KitchenOrderResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns KitchenOrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.KitchenOrderResult;

            /**
             * Verifies a KitchenOrderResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a KitchenOrderResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns KitchenOrderResult
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.KitchenOrderResult;

            /**
             * Creates a plain object from a KitchenOrderResult message. Also converts values to other types if specified.
             * @param message KitchenOrderResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.KitchenOrderResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this KitchenOrderResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for KitchenOrderResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** BaristaOrderItemStatus enum. */
        enum BaristaOrderItemStatus {
            BARISTA_ORDER_ITEM_STATUS_PENDING = 0,
            BARISTA_ORDER_ITEM_STATUS_STARTED = 1,
            BARISTA_ORDER_ITEM_STATUS_COMPLETED = 2,
            BARISTA_ORDER_ITEM_STATUS_FAILED = 3
        }

        /** Properties of a BaristaOrderLineItem. */
        interface IBaristaOrderLineItem {

            /** BaristaOrderLineItem name */
            name?: (string|null);

            /** BaristaOrderLineItem status */
            status?: (temporalio.cafe.BaristaOrderItemStatus|null);
        }

        /** Represents a BaristaOrderLineItem. */
        class BaristaOrderLineItem implements IBaristaOrderLineItem {

            /**
             * Constructs a new BaristaOrderLineItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IBaristaOrderLineItem);

            /** BaristaOrderLineItem name. */
            public name: string;

            /** BaristaOrderLineItem status. */
            public status: temporalio.cafe.BaristaOrderItemStatus;

            /**
             * Creates a new BaristaOrderLineItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BaristaOrderLineItem instance
             */
            public static create(properties?: temporalio.cafe.IBaristaOrderLineItem): temporalio.cafe.BaristaOrderLineItem;

            /**
             * Encodes the specified BaristaOrderLineItem message. Does not implicitly {@link temporalio.cafe.BaristaOrderLineItem.verify|verify} messages.
             * @param message BaristaOrderLineItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IBaristaOrderLineItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaristaOrderLineItem message, length delimited. Does not implicitly {@link temporalio.cafe.BaristaOrderLineItem.verify|verify} messages.
             * @param message BaristaOrderLineItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IBaristaOrderLineItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaristaOrderLineItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaristaOrderLineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.BaristaOrderLineItem;

            /**
             * Decodes a BaristaOrderLineItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaristaOrderLineItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.BaristaOrderLineItem;

            /**
             * Verifies a BaristaOrderLineItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaristaOrderLineItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaristaOrderLineItem
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.BaristaOrderLineItem;

            /**
             * Creates a plain object from a BaristaOrderLineItem message. Also converts values to other types if specified.
             * @param message BaristaOrderLineItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.BaristaOrderLineItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaristaOrderLineItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BaristaOrderLineItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BaristaOrderInput. */
        interface IBaristaOrderInput {

            /** BaristaOrderInput name */
            name?: (string|null);

            /** BaristaOrderInput items */
            items?: (temporalio.cafe.IOrderLineItem[]|null);
        }

        /** Represents a BaristaOrderInput. */
        class BaristaOrderInput implements IBaristaOrderInput {

            /**
             * Constructs a new BaristaOrderInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IBaristaOrderInput);

            /** BaristaOrderInput name. */
            public name: string;

            /** BaristaOrderInput items. */
            public items: temporalio.cafe.IOrderLineItem[];

            /**
             * Creates a new BaristaOrderInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BaristaOrderInput instance
             */
            public static create(properties?: temporalio.cafe.IBaristaOrderInput): temporalio.cafe.BaristaOrderInput;

            /**
             * Encodes the specified BaristaOrderInput message. Does not implicitly {@link temporalio.cafe.BaristaOrderInput.verify|verify} messages.
             * @param message BaristaOrderInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IBaristaOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaristaOrderInput message, length delimited. Does not implicitly {@link temporalio.cafe.BaristaOrderInput.verify|verify} messages.
             * @param message BaristaOrderInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IBaristaOrderInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaristaOrderInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaristaOrderInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.BaristaOrderInput;

            /**
             * Decodes a BaristaOrderInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaristaOrderInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.BaristaOrderInput;

            /**
             * Verifies a BaristaOrderInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaristaOrderInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaristaOrderInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.BaristaOrderInput;

            /**
             * Creates a plain object from a BaristaOrderInput message. Also converts values to other types if specified.
             * @param message BaristaOrderInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.BaristaOrderInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaristaOrderInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BaristaOrderInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BaristaOrderItemStatusUpdate. */
        interface IBaristaOrderItemStatusUpdate {

            /** BaristaOrderItemStatusUpdate line */
            line?: (number|null);

            /** BaristaOrderItemStatusUpdate status */
            status?: (temporalio.cafe.BaristaOrderItemStatus|null);
        }

        /** Represents a BaristaOrderItemStatusUpdate. */
        class BaristaOrderItemStatusUpdate implements IBaristaOrderItemStatusUpdate {

            /**
             * Constructs a new BaristaOrderItemStatusUpdate.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IBaristaOrderItemStatusUpdate);

            /** BaristaOrderItemStatusUpdate line. */
            public line: number;

            /** BaristaOrderItemStatusUpdate status. */
            public status: temporalio.cafe.BaristaOrderItemStatus;

            /**
             * Creates a new BaristaOrderItemStatusUpdate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BaristaOrderItemStatusUpdate instance
             */
            public static create(properties?: temporalio.cafe.IBaristaOrderItemStatusUpdate): temporalio.cafe.BaristaOrderItemStatusUpdate;

            /**
             * Encodes the specified BaristaOrderItemStatusUpdate message. Does not implicitly {@link temporalio.cafe.BaristaOrderItemStatusUpdate.verify|verify} messages.
             * @param message BaristaOrderItemStatusUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IBaristaOrderItemStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaristaOrderItemStatusUpdate message, length delimited. Does not implicitly {@link temporalio.cafe.BaristaOrderItemStatusUpdate.verify|verify} messages.
             * @param message BaristaOrderItemStatusUpdate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IBaristaOrderItemStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaristaOrderItemStatusUpdate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaristaOrderItemStatusUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.BaristaOrderItemStatusUpdate;

            /**
             * Decodes a BaristaOrderItemStatusUpdate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaristaOrderItemStatusUpdate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.BaristaOrderItemStatusUpdate;

            /**
             * Verifies a BaristaOrderItemStatusUpdate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaristaOrderItemStatusUpdate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaristaOrderItemStatusUpdate
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.BaristaOrderItemStatusUpdate;

            /**
             * Creates a plain object from a BaristaOrderItemStatusUpdate message. Also converts values to other types if specified.
             * @param message BaristaOrderItemStatusUpdate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.BaristaOrderItemStatusUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaristaOrderItemStatusUpdate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BaristaOrderItemStatusUpdate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BaristaOrderStatus. */
        interface IBaristaOrderStatus {

            /** BaristaOrderStatus name */
            name?: (string|null);

            /** BaristaOrderStatus open */
            open?: (boolean|null);

            /** BaristaOrderStatus items */
            items?: (temporalio.cafe.IBaristaOrderLineItem[]|null);
        }

        /** Represents a BaristaOrderStatus. */
        class BaristaOrderStatus implements IBaristaOrderStatus {

            /**
             * Constructs a new BaristaOrderStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IBaristaOrderStatus);

            /** BaristaOrderStatus name. */
            public name: string;

            /** BaristaOrderStatus open. */
            public open: boolean;

            /** BaristaOrderStatus items. */
            public items: temporalio.cafe.IBaristaOrderLineItem[];

            /**
             * Creates a new BaristaOrderStatus instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BaristaOrderStatus instance
             */
            public static create(properties?: temporalio.cafe.IBaristaOrderStatus): temporalio.cafe.BaristaOrderStatus;

            /**
             * Encodes the specified BaristaOrderStatus message. Does not implicitly {@link temporalio.cafe.BaristaOrderStatus.verify|verify} messages.
             * @param message BaristaOrderStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IBaristaOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaristaOrderStatus message, length delimited. Does not implicitly {@link temporalio.cafe.BaristaOrderStatus.verify|verify} messages.
             * @param message BaristaOrderStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IBaristaOrderStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaristaOrderStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaristaOrderStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.BaristaOrderStatus;

            /**
             * Decodes a BaristaOrderStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaristaOrderStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.BaristaOrderStatus;

            /**
             * Verifies a BaristaOrderStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaristaOrderStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaristaOrderStatus
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.BaristaOrderStatus;

            /**
             * Creates a plain object from a BaristaOrderStatus message. Also converts values to other types if specified.
             * @param message BaristaOrderStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.BaristaOrderStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaristaOrderStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BaristaOrderStatus
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a BaristaOrderResult. */
        interface IBaristaOrderResult {
        }

        /** Represents a BaristaOrderResult. */
        class BaristaOrderResult implements IBaristaOrderResult {

            /**
             * Constructs a new BaristaOrderResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IBaristaOrderResult);

            /**
             * Creates a new BaristaOrderResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BaristaOrderResult instance
             */
            public static create(properties?: temporalio.cafe.IBaristaOrderResult): temporalio.cafe.BaristaOrderResult;

            /**
             * Encodes the specified BaristaOrderResult message. Does not implicitly {@link temporalio.cafe.BaristaOrderResult.verify|verify} messages.
             * @param message BaristaOrderResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IBaristaOrderResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BaristaOrderResult message, length delimited. Does not implicitly {@link temporalio.cafe.BaristaOrderResult.verify|verify} messages.
             * @param message BaristaOrderResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IBaristaOrderResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BaristaOrderResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BaristaOrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.BaristaOrderResult;

            /**
             * Decodes a BaristaOrderResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BaristaOrderResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.BaristaOrderResult;

            /**
             * Verifies a BaristaOrderResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BaristaOrderResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BaristaOrderResult
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.BaristaOrderResult;

            /**
             * Creates a plain object from a BaristaOrderResult message. Also converts values to other types if specified.
             * @param message BaristaOrderResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.BaristaOrderResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BaristaOrderResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for BaristaOrderResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomerLoyaltyPointsBalance. */
        interface ICustomerLoyaltyPointsBalance {

            /** CustomerLoyaltyPointsBalance points */
            points?: (number|null);
        }

        /** Represents a CustomerLoyaltyPointsBalance. */
        class CustomerLoyaltyPointsBalance implements ICustomerLoyaltyPointsBalance {

            /**
             * Constructs a new CustomerLoyaltyPointsBalance.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.ICustomerLoyaltyPointsBalance);

            /** CustomerLoyaltyPointsBalance points. */
            public points: number;

            /**
             * Creates a new CustomerLoyaltyPointsBalance instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomerLoyaltyPointsBalance instance
             */
            public static create(properties?: temporalio.cafe.ICustomerLoyaltyPointsBalance): temporalio.cafe.CustomerLoyaltyPointsBalance;

            /**
             * Encodes the specified CustomerLoyaltyPointsBalance message. Does not implicitly {@link temporalio.cafe.CustomerLoyaltyPointsBalance.verify|verify} messages.
             * @param message CustomerLoyaltyPointsBalance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.ICustomerLoyaltyPointsBalance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomerLoyaltyPointsBalance message, length delimited. Does not implicitly {@link temporalio.cafe.CustomerLoyaltyPointsBalance.verify|verify} messages.
             * @param message CustomerLoyaltyPointsBalance message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.ICustomerLoyaltyPointsBalance, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomerLoyaltyPointsBalance message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomerLoyaltyPointsBalance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.CustomerLoyaltyPointsBalance;

            /**
             * Decodes a CustomerLoyaltyPointsBalance message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomerLoyaltyPointsBalance
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.CustomerLoyaltyPointsBalance;

            /**
             * Verifies a CustomerLoyaltyPointsBalance message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomerLoyaltyPointsBalance message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomerLoyaltyPointsBalance
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.CustomerLoyaltyPointsBalance;

            /**
             * Creates a plain object from a CustomerLoyaltyPointsBalance message. Also converts values to other types if specified.
             * @param message CustomerLoyaltyPointsBalance
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.CustomerLoyaltyPointsBalance, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomerLoyaltyPointsBalance to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomerLoyaltyPointsBalance
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomerLoyaltyPointsEarned. */
        interface ICustomerLoyaltyPointsEarned {

            /** CustomerLoyaltyPointsEarned points */
            points?: (number|null);
        }

        /** Represents a CustomerLoyaltyPointsEarned. */
        class CustomerLoyaltyPointsEarned implements ICustomerLoyaltyPointsEarned {

            /**
             * Constructs a new CustomerLoyaltyPointsEarned.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.ICustomerLoyaltyPointsEarned);

            /** CustomerLoyaltyPointsEarned points. */
            public points: number;

            /**
             * Creates a new CustomerLoyaltyPointsEarned instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomerLoyaltyPointsEarned instance
             */
            public static create(properties?: temporalio.cafe.ICustomerLoyaltyPointsEarned): temporalio.cafe.CustomerLoyaltyPointsEarned;

            /**
             * Encodes the specified CustomerLoyaltyPointsEarned message. Does not implicitly {@link temporalio.cafe.CustomerLoyaltyPointsEarned.verify|verify} messages.
             * @param message CustomerLoyaltyPointsEarned message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.ICustomerLoyaltyPointsEarned, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomerLoyaltyPointsEarned message, length delimited. Does not implicitly {@link temporalio.cafe.CustomerLoyaltyPointsEarned.verify|verify} messages.
             * @param message CustomerLoyaltyPointsEarned message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.ICustomerLoyaltyPointsEarned, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomerLoyaltyPointsEarned message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomerLoyaltyPointsEarned
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.CustomerLoyaltyPointsEarned;

            /**
             * Decodes a CustomerLoyaltyPointsEarned message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomerLoyaltyPointsEarned
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.CustomerLoyaltyPointsEarned;

            /**
             * Verifies a CustomerLoyaltyPointsEarned message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomerLoyaltyPointsEarned message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomerLoyaltyPointsEarned
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.CustomerLoyaltyPointsEarned;

            /**
             * Creates a plain object from a CustomerLoyaltyPointsEarned message. Also converts values to other types if specified.
             * @param message CustomerLoyaltyPointsEarned
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.CustomerLoyaltyPointsEarned, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomerLoyaltyPointsEarned to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomerLoyaltyPointsEarned
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomerInput. */
        interface ICustomerInput {

            /** CustomerInput email */
            email?: (string|null);
        }

        /** Represents a CustomerInput. */
        class CustomerInput implements ICustomerInput {

            /**
             * Constructs a new CustomerInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.ICustomerInput);

            /** CustomerInput email. */
            public email: string;

            /**
             * Creates a new CustomerInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomerInput instance
             */
            public static create(properties?: temporalio.cafe.ICustomerInput): temporalio.cafe.CustomerInput;

            /**
             * Encodes the specified CustomerInput message. Does not implicitly {@link temporalio.cafe.CustomerInput.verify|verify} messages.
             * @param message CustomerInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.ICustomerInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomerInput message, length delimited. Does not implicitly {@link temporalio.cafe.CustomerInput.verify|verify} messages.
             * @param message CustomerInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.ICustomerInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomerInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomerInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.CustomerInput;

            /**
             * Decodes a CustomerInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomerInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.CustomerInput;

            /**
             * Verifies a CustomerInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomerInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomerInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.CustomerInput;

            /**
             * Creates a plain object from a CustomerInput message. Also converts values to other types if specified.
             * @param message CustomerInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.CustomerInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomerInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomerInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Payment. */
        interface IPayment {

            /** Payment authcode */
            authcode?: (string|null);
        }

        /** Represents a Payment. */
        class Payment implements IPayment {

            /**
             * Constructs a new Payment.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IPayment);

            /** Payment authcode. */
            public authcode: string;

            /**
             * Creates a new Payment instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Payment instance
             */
            public static create(properties?: temporalio.cafe.IPayment): temporalio.cafe.Payment;

            /**
             * Encodes the specified Payment message. Does not implicitly {@link temporalio.cafe.Payment.verify|verify} messages.
             * @param message Payment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Payment message, length delimited. Does not implicitly {@link temporalio.cafe.Payment.verify|verify} messages.
             * @param message Payment message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Payment message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Payment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.Payment;

            /**
             * Decodes a Payment message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Payment
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.Payment;

            /**
             * Verifies a Payment message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Payment message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Payment
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.Payment;

            /**
             * Creates a plain object from a Payment message. Also converts values to other types if specified.
             * @param message Payment
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Payment to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Payment
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProcessPaymentInput. */
        interface IProcessPaymentInput {

            /** ProcessPaymentInput token */
            token?: (string|null);
        }

        /** Represents a ProcessPaymentInput. */
        class ProcessPaymentInput implements IProcessPaymentInput {

            /**
             * Constructs a new ProcessPaymentInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IProcessPaymentInput);

            /** ProcessPaymentInput token. */
            public token: string;

            /**
             * Creates a new ProcessPaymentInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessPaymentInput instance
             */
            public static create(properties?: temporalio.cafe.IProcessPaymentInput): temporalio.cafe.ProcessPaymentInput;

            /**
             * Encodes the specified ProcessPaymentInput message. Does not implicitly {@link temporalio.cafe.ProcessPaymentInput.verify|verify} messages.
             * @param message ProcessPaymentInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IProcessPaymentInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessPaymentInput message, length delimited. Does not implicitly {@link temporalio.cafe.ProcessPaymentInput.verify|verify} messages.
             * @param message ProcessPaymentInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IProcessPaymentInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessPaymentInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessPaymentInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.ProcessPaymentInput;

            /**
             * Decodes a ProcessPaymentInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessPaymentInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.ProcessPaymentInput;

            /**
             * Verifies a ProcessPaymentInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessPaymentInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessPaymentInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.ProcessPaymentInput;

            /**
             * Creates a plain object from a ProcessPaymentInput message. Also converts values to other types if specified.
             * @param message ProcessPaymentInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.ProcessPaymentInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessPaymentInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProcessPaymentInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProcessPaymentResult. */
        interface IProcessPaymentResult {

            /** ProcessPaymentResult payment */
            payment?: (temporalio.cafe.IPayment|null);
        }

        /** Represents a ProcessPaymentResult. */
        class ProcessPaymentResult implements IProcessPaymentResult {

            /**
             * Constructs a new ProcessPaymentResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IProcessPaymentResult);

            /** ProcessPaymentResult payment. */
            public payment?: (temporalio.cafe.IPayment|null);

            /**
             * Creates a new ProcessPaymentResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessPaymentResult instance
             */
            public static create(properties?: temporalio.cafe.IProcessPaymentResult): temporalio.cafe.ProcessPaymentResult;

            /**
             * Encodes the specified ProcessPaymentResult message. Does not implicitly {@link temporalio.cafe.ProcessPaymentResult.verify|verify} messages.
             * @param message ProcessPaymentResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IProcessPaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessPaymentResult message, length delimited. Does not implicitly {@link temporalio.cafe.ProcessPaymentResult.verify|verify} messages.
             * @param message ProcessPaymentResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IProcessPaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessPaymentResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessPaymentResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.ProcessPaymentResult;

            /**
             * Decodes a ProcessPaymentResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessPaymentResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.ProcessPaymentResult;

            /**
             * Verifies a ProcessPaymentResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessPaymentResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessPaymentResult
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.ProcessPaymentResult;

            /**
             * Creates a plain object from a ProcessPaymentResult message. Also converts values to other types if specified.
             * @param message ProcessPaymentResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.ProcessPaymentResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessPaymentResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProcessPaymentResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProcessPaymentRefundInput. */
        interface IProcessPaymentRefundInput {

            /** ProcessPaymentRefundInput payment */
            payment?: (temporalio.cafe.IPayment|null);
        }

        /** Represents a ProcessPaymentRefundInput. */
        class ProcessPaymentRefundInput implements IProcessPaymentRefundInput {

            /**
             * Constructs a new ProcessPaymentRefundInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IProcessPaymentRefundInput);

            /** ProcessPaymentRefundInput payment. */
            public payment?: (temporalio.cafe.IPayment|null);

            /**
             * Creates a new ProcessPaymentRefundInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessPaymentRefundInput instance
             */
            public static create(properties?: temporalio.cafe.IProcessPaymentRefundInput): temporalio.cafe.ProcessPaymentRefundInput;

            /**
             * Encodes the specified ProcessPaymentRefundInput message. Does not implicitly {@link temporalio.cafe.ProcessPaymentRefundInput.verify|verify} messages.
             * @param message ProcessPaymentRefundInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IProcessPaymentRefundInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessPaymentRefundInput message, length delimited. Does not implicitly {@link temporalio.cafe.ProcessPaymentRefundInput.verify|verify} messages.
             * @param message ProcessPaymentRefundInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IProcessPaymentRefundInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessPaymentRefundInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessPaymentRefundInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.ProcessPaymentRefundInput;

            /**
             * Decodes a ProcessPaymentRefundInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessPaymentRefundInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.ProcessPaymentRefundInput;

            /**
             * Verifies a ProcessPaymentRefundInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessPaymentRefundInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessPaymentRefundInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.ProcessPaymentRefundInput;

            /**
             * Creates a plain object from a ProcessPaymentRefundInput message. Also converts values to other types if specified.
             * @param message ProcessPaymentRefundInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.ProcessPaymentRefundInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessPaymentRefundInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProcessPaymentRefundInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ProcessPaymentRefundResult. */
        interface IProcessPaymentRefundResult {
        }

        /** Represents a ProcessPaymentRefundResult. */
        class ProcessPaymentRefundResult implements IProcessPaymentRefundResult {

            /**
             * Constructs a new ProcessPaymentRefundResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IProcessPaymentRefundResult);

            /**
             * Creates a new ProcessPaymentRefundResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ProcessPaymentRefundResult instance
             */
            public static create(properties?: temporalio.cafe.IProcessPaymentRefundResult): temporalio.cafe.ProcessPaymentRefundResult;

            /**
             * Encodes the specified ProcessPaymentRefundResult message. Does not implicitly {@link temporalio.cafe.ProcessPaymentRefundResult.verify|verify} messages.
             * @param message ProcessPaymentRefundResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IProcessPaymentRefundResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ProcessPaymentRefundResult message, length delimited. Does not implicitly {@link temporalio.cafe.ProcessPaymentRefundResult.verify|verify} messages.
             * @param message ProcessPaymentRefundResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IProcessPaymentRefundResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ProcessPaymentRefundResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ProcessPaymentRefundResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.ProcessPaymentRefundResult;

            /**
             * Decodes a ProcessPaymentRefundResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ProcessPaymentRefundResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.ProcessPaymentRefundResult;

            /**
             * Verifies a ProcessPaymentRefundResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ProcessPaymentRefundResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ProcessPaymentRefundResult
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.ProcessPaymentRefundResult;

            /**
             * Creates a plain object from a ProcessPaymentRefundResult message. Also converts values to other types if specified.
             * @param message ProcessPaymentRefundResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.ProcessPaymentRefundResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ProcessPaymentRefundResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ProcessPaymentRefundResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddLoyaltyPointsInput. */
        interface IAddLoyaltyPointsInput {

            /** AddLoyaltyPointsInput email */
            email?: (string|null);

            /** AddLoyaltyPointsInput points */
            points?: (number|null);
        }

        /** Represents an AddLoyaltyPointsInput. */
        class AddLoyaltyPointsInput implements IAddLoyaltyPointsInput {

            /**
             * Constructs a new AddLoyaltyPointsInput.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IAddLoyaltyPointsInput);

            /** AddLoyaltyPointsInput email. */
            public email: string;

            /** AddLoyaltyPointsInput points. */
            public points: number;

            /**
             * Creates a new AddLoyaltyPointsInput instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddLoyaltyPointsInput instance
             */
            public static create(properties?: temporalio.cafe.IAddLoyaltyPointsInput): temporalio.cafe.AddLoyaltyPointsInput;

            /**
             * Encodes the specified AddLoyaltyPointsInput message. Does not implicitly {@link temporalio.cafe.AddLoyaltyPointsInput.verify|verify} messages.
             * @param message AddLoyaltyPointsInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IAddLoyaltyPointsInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddLoyaltyPointsInput message, length delimited. Does not implicitly {@link temporalio.cafe.AddLoyaltyPointsInput.verify|verify} messages.
             * @param message AddLoyaltyPointsInput message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IAddLoyaltyPointsInput, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddLoyaltyPointsInput message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddLoyaltyPointsInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.AddLoyaltyPointsInput;

            /**
             * Decodes an AddLoyaltyPointsInput message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddLoyaltyPointsInput
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.AddLoyaltyPointsInput;

            /**
             * Verifies an AddLoyaltyPointsInput message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddLoyaltyPointsInput message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddLoyaltyPointsInput
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.AddLoyaltyPointsInput;

            /**
             * Creates a plain object from an AddLoyaltyPointsInput message. Also converts values to other types if specified.
             * @param message AddLoyaltyPointsInput
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.AddLoyaltyPointsInput, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddLoyaltyPointsInput to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddLoyaltyPointsInput
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AddLoyaltyPointsResult. */
        interface IAddLoyaltyPointsResult {
        }

        /** Represents an AddLoyaltyPointsResult. */
        class AddLoyaltyPointsResult implements IAddLoyaltyPointsResult {

            /**
             * Constructs a new AddLoyaltyPointsResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: temporalio.cafe.IAddLoyaltyPointsResult);

            /**
             * Creates a new AddLoyaltyPointsResult instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AddLoyaltyPointsResult instance
             */
            public static create(properties?: temporalio.cafe.IAddLoyaltyPointsResult): temporalio.cafe.AddLoyaltyPointsResult;

            /**
             * Encodes the specified AddLoyaltyPointsResult message. Does not implicitly {@link temporalio.cafe.AddLoyaltyPointsResult.verify|verify} messages.
             * @param message AddLoyaltyPointsResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: temporalio.cafe.IAddLoyaltyPointsResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AddLoyaltyPointsResult message, length delimited. Does not implicitly {@link temporalio.cafe.AddLoyaltyPointsResult.verify|verify} messages.
             * @param message AddLoyaltyPointsResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: temporalio.cafe.IAddLoyaltyPointsResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AddLoyaltyPointsResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AddLoyaltyPointsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): temporalio.cafe.AddLoyaltyPointsResult;

            /**
             * Decodes an AddLoyaltyPointsResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AddLoyaltyPointsResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): temporalio.cafe.AddLoyaltyPointsResult;

            /**
             * Verifies an AddLoyaltyPointsResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AddLoyaltyPointsResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AddLoyaltyPointsResult
             */
            public static fromObject(object: { [k: string]: any }): temporalio.cafe.AddLoyaltyPointsResult;

            /**
             * Creates a plain object from an AddLoyaltyPointsResult message. Also converts values to other types if specified.
             * @param message AddLoyaltyPointsResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: temporalio.cafe.AddLoyaltyPointsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AddLoyaltyPointsResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AddLoyaltyPointsResult
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
