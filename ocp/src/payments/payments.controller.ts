import { Body, Controller, Post } from '@nestjs/common';
import { PaymentsService } from './payments.service';

type PayDTO = {
  type: string;
  amount: number;
};

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}
  @Post()
  pay(@Body() body: PayDTO) {
    this.paymentService.processPayments(body.type, body.amount);
  }
}
