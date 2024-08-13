import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
const cors = require('cors');
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

dotenv.config();


async function bootstrap() {

  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  console.log(__dirname, '..', 'public');
  app.use(cors({
    origin: 'http://localhost:3001', // Adjust according to your client application
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  }));
  await app.listen(3000);
}
bootstrap();
