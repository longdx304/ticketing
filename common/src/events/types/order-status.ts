export enum OrderStatus {
  // when order has been created but ticket has not been reserved
  Created = 'created',

  // ticket has already been reserved OR when user cancel the order OR order expires before payment
  Cancelled = 'cancelled',

  // the order has successfully reserved ticket
  AwaitingPayment = 'awaiting:payment',

  // the order has reserved the ticket and user has provided payment successfully
  Complete = 'complete',
}
