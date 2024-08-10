import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Work, WorkDocument } from './work.schema';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

@Injectable()
export class WorkService {
  constructor(
    @InjectModel(Work.name) private readonly workModel: Model<WorkDocument>,
  ) {}

  async create(createWorkDto: CreateWorkDto): Promise<WorkDocument> {
    const createdWork = new this.workModel(createWorkDto);
    return createdWork.save();
  }

  async findAll(page: number = 1, limit: number = 10): Promise<WorkDocument[]> {
    return this.workModel
      .find()
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<WorkDocument> {
    const work = await this.workModel.findById(id).exec();
    if (!work) {
      throw new NotFoundException(`Work with ID ${id} not found`);
    }
    return work;
  }

  async update(id: string, updateWorkDto: UpdateWorkDto): Promise<WorkDocument> {
    const work = await this.findOne(id);
    Object.assign(work, updateWorkDto);
    return work.save();
  }

  async remove(id: string): Promise<void> {
    const result = await this.workModel.deleteOne({ _id: id }).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException(`Work with ID ${id} not found`);
    }
  }
}
