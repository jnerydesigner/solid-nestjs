import { CreateUserDto } from '@app/dtos/create-user.dto';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserUseCase } from './create-user.usecase';
import { FindUserUseCase } from './find-user.usecase';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly findUserUseCase: FindUserUseCase,
  ) {}

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.createUserUseCase.execute(data);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    return this.findUserUseCase.execute(parseInt(id));
  }
}
