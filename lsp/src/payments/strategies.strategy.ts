import { Injectable, Logger } from '@nestjs/common';
import { MessagePayment, PaymentInterface } from './payment.interface';

@Injectable()
export class CreditCardStrategy implements PaymentInterface {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(CreditCardStrategy.name);
  }
  processPayment(amount: number): MessagePayment {
    this.logger.log(
      `Tipo de Pagamento: Cartão de Credito, no valor de ${amount}`,
    );

    this.logger.log(
      '-------------------- INICIANDO O SERVICO -------------------- ',
    );
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log(
      '-------------------- TERMINANDO O SERVICO -------------------- ',
    );

    return {
      message: `Tipo de Pagamento: Cartão de Credito, no valor de ${amount}`,
    };
  }
}

@Injectable()
export class PixStrategy implements PaymentInterface {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(PixStrategy.name);
  }
  processPayment(amount: number): MessagePayment {
    this.logger.log(`Tipo de Pagamento: Pix, no valor de ${amount}`);

    this.logger.log(
      '-------------------- INICIANDO O SERVICO -------------------- ',
    );
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log(
      '-------------------- TERMINANDO O SERVICO -------------------- ',
    );

    return {
      message: `Tipo de Pagamento: Pix, no valor de ${amount}`,
    };
  }
}

@Injectable()
export class BoletoStrategy implements PaymentInterface {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(BoletoStrategy.name);
  }
  processPayment(amount: number): MessagePayment {
    this.logger.log(`Tipo de Pagamento: Boleto, no valor de ${amount}`);

    this.logger.log(
      '-------------------- INICIANDO O SERVICO -------------------- ',
    );
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log(
      '-------------------- TERMINANDO O SERVICO -------------------- ',
    );

    return {
      message: `Tipo de Pagamento: Boleto, no valor de ${amount}`,
    };
  }
}

@Injectable()
export class PayPalStrategy implements PaymentInterface {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(PayPalStrategy.name);
  }
  processPayment(amount: number): MessagePayment {
    this.logger.log(`Tipo de Pagamento: PayPal, no valor de ${amount}`);

    this.logger.log(
      '-------------------- INICIANDO O SERVICO -------------------- ',
    );
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log('');
    this.logger.log(
      '-------------------- TERMINANDO O SERVICO -------------------- ',
    );

    return {
      message: `Tipo de Pagamento: PayPal, no valor de ${amount}`,
    };
  }
}
