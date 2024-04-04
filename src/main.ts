import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const loggerService = app.get(Logger);
  const configService = app.get(ConfigService);
  const config = configService.get('application');

  await app.listen(config.port, () =>
    loggerService.log(
      `Nest Application is running on port: ${config.port}`,
      bootstrap.name,
    )
  );
}
bootstrap();
