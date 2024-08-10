import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum WorkStatus {
  HIDDEN = 'hidden',
  DISPLAYED = 'displayed',
}

export type WorkDocument = Work & Document;

@Schema({ timestamps: true }) // Automatically handles createdAt and updatedAt
export class Work {
  @Prop({ required: true, maxlength: 255 })
  title: string;

  @Prop({ type: String, maxlength: 1000, default: '' }) // Optional, default empty string
  description: string;

  @Prop({ required: true, maxlength: 255 })
  imageUrl: string;

  @Prop({ type: String, maxlength: 255, default: '' }) // Optional, default empty string
  clientUrl: string;

  @Prop({ enum: WorkStatus, default: WorkStatus.DISPLAYED })
  status: WorkStatus;
}

export const WorkSchema = SchemaFactory.createForClass(Work);
