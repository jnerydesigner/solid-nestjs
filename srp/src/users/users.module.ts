import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './create-user.usecase';
import { FindUserUseCase } from './find-user.usecase';

@Module({
  controllers: [UsersController],
  providers: [CreateUserUseCase, FindUserUseCase],
})
export class UsersModule {}
