import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class PaymentsService {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(PaymentsService.name);
  }
  processPayments(type: string, amount: number): void {
    if (type === 'credit-card') {
      this.logger.log(
        `Tipo de Pagamento: ${type} - Valor do Pagamento: ${amount}`,
      );
    } else if (type === 'pix') {
      this.logger.log(
        `Tipo de Pagamento: ${type} - Valor do Pagamento: ${amount}`,
      );
    }
  }
}
