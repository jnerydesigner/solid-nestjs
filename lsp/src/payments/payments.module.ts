import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { CreditCardStrategy, PixStrategy } from './strategies.strategy';

@Module({
  controllers: [PaymentsController],
  providers: [PaymentsService, CreditCardStrategy, PixStrategy],
})
export class PaymentsModule {}
