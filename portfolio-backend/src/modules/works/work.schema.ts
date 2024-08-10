import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { WorkStatus } from './work-status.enum'; // Adjust path as needed

export type WorkDocument = Work & Document;

@Schema()
export class Work {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  clientUrl: string;

  @Prop({ enum: WorkStatus, default: WorkStatus.DISPLAYED })
  status: WorkStatus;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
