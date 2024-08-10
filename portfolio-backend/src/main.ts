import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
const cors = require('cors');

dotenv.config();


async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(cors())
  await app.listen(3000);
}
bootstrap();
