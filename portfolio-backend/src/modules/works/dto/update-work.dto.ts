import { IsOptional, IsString, IsEnum } from 'class-validator';
import { WorkStatus } from '../work-status.enum'; // Adjust import path as needed

export class UpdateWorkDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  clientUrl?: string;

  @IsOptional()
  @IsEnum(WorkStatus)
  status?: WorkStatus;
}
