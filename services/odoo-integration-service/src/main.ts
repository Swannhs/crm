import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module.js';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter.js';
import { rateLimit } from 'express-rate-limit';
import { randomUUID } from 'crypto';

async function bootstrap() {
  const nodeEnv = process.env.NODE_ENV || 'development';
  if (nodeEnv === 'production' && !process.env.ALLOWED_ORIGIN) {
    throw new Error('ALLOWED_ORIGIN must be set in production.');
  }
  if (nodeEnv === 'production' && process.env.ALLOWED_ORIGIN === '*') {
    throw new Error('Wildcard CORS origin is not allowed in production.');
  }
  const app = await NestFactory.create(AppModule, { rawBody: true });

  app.use((req: any, res: any, next: any) => {
    const requestId = req.headers['x-request-id'] || randomUUID();
    req.requestId = requestId;
    res.setHeader('x-request-id', String(requestId));
    next();
  });

  const corsOrigin =
    nodeEnv === 'production'
      ? (process.env.ALLOWED_ORIGIN || '').split(',').map((item) => item.trim()).filter(Boolean)
      : process.env.ALLOWED_ORIGIN || '*';

  app.enableCors({
    origin: corsOrigin,
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

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: false,
    }),
  );
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.setGlobalPrefix('v1/odoo');

  const config = new DocumentBuilder()
    .setTitle('Odoo Integration Service')
    .setDescription('Industrial Odoo API for MyManager')
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'x-user-id', in: 'header' }, 'x-user-id')
    .addApiKey({ type: 'apiKey', name: 'x-org-id', in: 'header' }, 'x-org-id')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 7200, '0.0.0.0');
}
bootstrap();
