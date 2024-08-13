import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Query, UploadedFile, BadRequestException, Req, Put, NotFoundException } from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Work } from './work.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { Request } from 'express';
import { unlinkSync, existsSync } from 'fs';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) { }

  // @Post()
  // create(@Body() createWorkDto: CreateWorkDto): Promise<Work> {
  //   return this.workService.create(createWorkDto);
  // }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ): Promise<Work[]> {
    return this.workService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Work> {
    return this.workService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './public/work_images',
      filename: (req, file, callback) => {
        const ext = extname(file.originalname);
        // Using the title from the request body to name the file
        const filename = `${req.body.title.replace(/\s+/g, '_').toLowerCase()}${ext}`;
        callback(null, filename);
      },
    }),
    fileFilter: (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new BadRequestException('Only image files are allowed!'), false);
      }
      callback(null, true);
    },
  }))
  async updateWork(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request
  ) {
    const { title, description, clientUrl, status } = req.body;

    if (!title) {
      throw new BadRequestException('Title is required');
    }

    // Find the existing work
    const existingWork = await this.workService.findOne(id);

    // Delete old image if it exists
    if (existingWork && existingWork.imageUrl) {
      const oldImagePath = join(__dirname, '..', 'public', existingWork.imageUrl);
      if (existsSync(oldImagePath)) {
        unlinkSync(oldImagePath);
      }
    }

    // Determine new image URL
    const imageUrl = file ? `work_images/${file.filename}` : existingWork.imageUrl;

    // Update the work
    try {
      const updatedWork = await this.workService.update(id, {
        title,
        description,
        imageUrl,
        clientUrl,
        status,
      });

      return { message: 'Work updated successfully', work: updatedWork };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateWorkDto
  ) {
    const { status } = updateStatusDto;

    const work = await this.workService.findOne(id);
    if (!work) {
      throw new NotFoundException(`Work with ID ${id} not found`);
    }

    // Update the status
    work.status = status;
    await work.save();

    return { message: 'Work status updated successfully', work };
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.workService.remove(id);
  }

  @Delete('/title/:title')
  removetitle(@Param('title') title: string): Promise<void> {
    return this.workService.removetitle(title);
  }
  @Post()
  @UseInterceptors(FileInterceptor('image', {

    storage: diskStorage({
      destination: './public/work_images',
      filename: (req, file, callback) => {
        const ext = extname(file.originalname);
        const filename = `${req.body.title.replace(/\s+/g, '_').toLowerCase()}${ext}`;
        callback(null, filename);
      },
    }),
    fileFilter: (req, file, callback) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new BadRequestException('Only image files are allowed!'), false);
      }
      callback(null, true);
    },
  }))
  async createWork(
    @UploadedFile() file: Express.Multer.File,
    @Req() req: Request
  ) {
    const { title, description, clientUrl, status } = req.body;

    console.log(title);

    if (!title) {
      throw new BadRequestException('Title is required');
    }

    if (!file) {
      throw new BadRequestException('Image file is required');
    }

    const imageUrl = `work_images/${file.filename}`;

    try {
      const work = await this.workService.create({
        title,
        description,
        imageUrl,
        clientUrl,
        status,
      });

      return { message: 'Work created successfully', work };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
