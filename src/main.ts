import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 8080;
  const app = await NestFactory.create(AppModule);
  (await app).useGlobalPipes(new ValidationPipe({
      transform: true,
      whitelist: true,
  }));
  app.enableCors();
  await app.listen(port);
  console.log("Application running on port ", port);
}
bootstrap();
