import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const appOptions = {};
  const app = await NestFactory.create(AppModule, appOptions);
  app.setGlobalPrefix('api');

  await app.listen(3000);
}

bootstrap();
