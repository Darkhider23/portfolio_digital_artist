import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WorkModule } from './modules/works/work.module'; // Ensure this path is correct
import { Work, WorkSchema } from './modules/works/work.schema';

@Module({
  imports: [
    ConfigModule.forRoot(), // Load environment variables
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }]),
    WorkModule, // Import the WorkModule that contains controllers and services for the Work entity
    // Other modules here
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
