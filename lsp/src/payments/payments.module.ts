import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import {
  BoletoStrategy,
  CreditCardStrategy,
  PayPalStrategy,
  PixStrategy,
} from './strategies.strategy';

@Module({
  controllers: [PaymentsController],
  providers: [
    PaymentsService,
    CreditCardStrategy,
    PixStrategy,
    BoletoStrategy,
    PayPalStrategy,
  ],
})
export class PaymentsModule {}
