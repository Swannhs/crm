import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

import { rateLimit } from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.ALLOWED_ORIGIN || '*',
    credentials: true,
  });

  app.use(rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 100, // 100 requests per minute
    message: { 
      success: false, 
      error: { 
        code: 'TOO_MANY_REQUESTS', 
        message: 'Too many requests, please try again later.' 
      } 
    }
  }));

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Booking Service')
    .setDescription('The MyManager Booking & Appointment API')
    .setVersion('1.0')
    .addTag('booking')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.PORT || 7040;
  await app.listen(port, '0.0.0.0');
  console.log(`Booking Service is running on: http://localhost:${port}`);
}
bootstrap();
