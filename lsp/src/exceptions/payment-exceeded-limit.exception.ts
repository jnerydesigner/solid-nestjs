import { HttpException, HttpStatus } from '@nestjs/common';

export class PaymentExceededException extends HttpException {
  constructor() {
    super('Payment amount exceeds the allowed limit', HttpStatus.BAD_REQUEST);
  }
}
