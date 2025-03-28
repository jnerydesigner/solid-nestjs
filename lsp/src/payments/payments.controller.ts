import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

type PayDTO = {
  type: string;
  amount: string;
};

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}
  @Post()
  pay(@Body() body: PayDTO) {
    const numberFormated = parseFloat(body.amount.replace(',', '.'));
    return this.paymentService.processPayments(body.type, numberFormated);
  }
}
