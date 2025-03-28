export type MessagePayment = {
  message: string;
};

export interface PaymentInterface {
  processPayment(amount: number): MessagePayment;
}
