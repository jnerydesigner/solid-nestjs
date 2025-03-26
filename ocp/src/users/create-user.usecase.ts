import { PrismaService } from '@app/database/prisma.service';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly prismaService: PrismaService) {}
  async execute(data: Input) {
    const findUser = await this.prismaService.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (findUser) {
      throw new BadRequestException('User Exists');
    }
    return this.prismaService.user.create({
      data,
    });
  }
}

type Input = {
  email: string;
  name: string;
  password: string;
};
