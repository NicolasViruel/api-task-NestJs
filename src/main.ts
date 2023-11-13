import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { TimeOutInterceptor } from './common/Interceptors/timeout.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //validaciones
  app.useGlobalPipes( new ValidationPipe());
  //filtros de errores globales
  app.useGlobalFilters( new AllExceptionFilter());
  await app.listen(3000);
  //filtro Interceptors
  app.useGlobalInterceptors(new TimeOutInterceptor());
}
bootstrap();
