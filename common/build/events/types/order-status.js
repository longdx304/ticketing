"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    // when order has been created but ticket has not been reserved
    OrderStatus["Created"] = "created";
    // ticket has already been reserved OR when user cancel the order OR order expires before payment
    OrderStatus["Cancelled"] = "cancelled";
    // the order has successfully reserved ticket
    OrderStatus["AwaitingPayment"] = "awaiting:payment";
    // the order has reserved the ticket and user has provided payment successfully
    OrderStatus["Complete"] = "complete";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
