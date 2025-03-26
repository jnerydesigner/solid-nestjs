import { PrismaService } from '@app/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserUseCase {
  constructor(private readonly prismaService: PrismaService) {}
  execute(id: number) {
    return this.prismaService.user.findFirst({
      where: {
        id,
      },
    });
  }
}
