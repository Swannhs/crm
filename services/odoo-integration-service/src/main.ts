import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, 
    transform: true,
    forbidNonWhitelisted: true,
  }));
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.setGlobalPrefix('v1/odoo');
  
  const config = new DocumentBuilder()
    .setTitle('Odoo Integration Service')
    .setDescription('Industrial Odoo API for MyManager')
    .setVersion('1.0')
    .addHeader('x-user-id', 'User ID')
    .addHeader('x-org-id', 'Organization ID')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 7200, '0.0.0.0');
}
bootstrap();
