import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './work.schema';
import { WorkController } from './work.controller'; // Ensure this path is correct
import { WorkService } from './work.service'; // Ensure this path is correct

@Module({
  imports: [MongooseModule.forFeature([{ name: Work.name, schema: WorkSchema }])],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
