import { Test, TestingModule } from '@nestjs/testing';
import { WorkController } from './work.controller';
import { WorkService } from './work.service';
import { Work } from './work.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { UpdateWorkDto } from './dto/update-work.dto';

describe('WorkController', () => {
  let controller: WorkController;
  let service: WorkService;
  let model: Model<Work>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkController],
      providers: [
        WorkService,
        {
          provide: getModelToken(Work.name),
          useValue: {
            create: jest.fn().mockResolvedValue({} as Work),
            find: jest.fn().mockResolvedValue([] as Work[]),
            findById: jest.fn().mockResolvedValue({} as Work),
            save: jest.fn().mockResolvedValue({} as Work),
            deleteOne: jest.fn().mockResolvedValue({ deletedCount: 1 }),
          },
        },
      ],
    }).compile();

    controller = module.get<WorkController>(WorkController);
    service = module.get<WorkService>(WorkService);
    model = module.get<Model<Work>>(getModelToken(Work.name));
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a work', async () => {
      const dto = { title: 'New Work', description: 'Description', imageUrl: 'imageUrl', clientUrl: 'clientUrl' };
      const result = {} as Work;
      jest.spyOn(service, 'create').mockResolvedValue(result);
      expect(await controller.create(dto)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of works', async () => {
      const result = [] as Work[];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);
      expect(await controller.findAll(1, 10)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a work by id', async () => {
      const id = 'some-id';
      const result = {} as Work;
      jest.spyOn(service, 'findOne').mockResolvedValue(result);
      expect(await controller.findOne(id)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update a work by id', async () => {
      const id = 'some-id';
      const updateDto = { title: 'Updated Work' } as UpdateWorkDto;
      const result = {} as Work;
      jest.spyOn(service, 'update').mockResolvedValue(result);
      expect(await controller.update(id, updateDto)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove a work by id', async () => {
      const id = 'some-id';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(id);
    });
  });
  describe('removetitle', () => {
    it('should remove a work by id', async () => {
      const title = 'some-title';
      jest.spyOn(service, 'removetitle').mockResolvedValue(undefined);
      await controller.remove(title);
      expect(service.remove).toHaveBeenCalledWith(title);
    });
  });
});
