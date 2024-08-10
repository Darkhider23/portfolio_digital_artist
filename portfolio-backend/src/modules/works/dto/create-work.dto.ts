import { IsEnum, IsOptional, IsString } from 'class-validator';
import { WorkStatus } from '../entities/work.entity';

export class CreateWorkDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsString()
  clientUrl?: string;

  @IsOptional()
  @IsEnum(WorkStatus)
  status?: WorkStatus;
}
