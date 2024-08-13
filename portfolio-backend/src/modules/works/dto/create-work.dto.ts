import { IsString, IsOptional, IsEnum } from 'class-validator';
import { WorkStatus } from '../work-status.enum';

export class CreateWorkDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  clientUrl?: string;

  @IsEnum(WorkStatus)
  @IsOptional()
  status?: WorkStatus;
}
