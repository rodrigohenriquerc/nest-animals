import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ForbiddenException } from 'src/forbidden.exception';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() cat: CreateCatDto) {
    this.catsService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
  }

  @Get(':id')
  findOne(@Param() params: any): string {
    return `This action returns a #${params.id} cat.`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() cat: UpdateCatDto) {
    return `This action updates a #${id} cat. Now it has the following characteristics: ${cat.name}, ${cat.age} years old. Breed: ${cat.breed}.`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat.`;
  }
}
