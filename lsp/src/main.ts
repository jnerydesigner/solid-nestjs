import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new ConfigService();
  const PORT = config.get<number>('SERVER_PORT', 3355);
  const logger = new Logger();
  await app.listen(PORT, () => {
    logger.log(`Server is Running in port: ${PORT}`);
  });
}
bootstrap();
