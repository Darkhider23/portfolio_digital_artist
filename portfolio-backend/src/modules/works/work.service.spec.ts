import { Test, TestingModule } from '@nestjs/testing';
import { WorkService } from './work.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { Work, WorkDocument } from './work.schema';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';

describe('WorkService', () => {
  let service: WorkService;
  let model: Model<WorkDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WorkService,
        {
          provide: getModelToken(Work.name),
          useValue: {
            create: jest.fn().mockResolvedValue({} as WorkDocument),
            find: jest.fn().mockResolvedValue([] as WorkDocument[]),
            findById: jest.fn().mockResolvedValue({} as WorkDocument),
            save: jest.fn().mockResolvedValue({} as WorkDocument),
            deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
          },
        },
      ],
    }).compile();

    service = module.get<WorkService>(WorkService);
    model = module.get<Model<WorkDocument>>(getModelToken(Work.name));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Add specific method tests here
});
