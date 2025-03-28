import { Injectable, Logger } from '@nestjs/common';
import { MessagePayment, PaymentInterface } from './payment.interface';
import {
  BoletoStrategy,
  CreditCardStrategy,
  PayPalStrategy,
  PixStrategy,
} from './strategies.strategy';

@Injectable()
export class PaymentsService {
  private logger: Logger;
  private paymentMethods: Record<string, PaymentInterface>;
  constructor(
    private readonly creditCardStrategy: CreditCardStrategy,
    private readonly pixStrategy: PixStrategy,
    private readonly boletoStrategy: BoletoStrategy,
    private readonly paypalStrategy: PayPalStrategy,
  ) {
    this.logger = new Logger(PaymentsService.name);
    this.paymentMethods = {
      creditCard: this.creditCardStrategy,
      pix: this.pixStrategy,
      boleto: this.boletoStrategy,
      paypal: this.paypalStrategy,
    };
  }
  processPayments(type: string, amount: number): MessagePayment {
    const payment = this.paymentMethods[type];
    return payment.processPayment(amount);
  }
}
