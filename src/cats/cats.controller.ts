import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dto';

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() cat: CreateCatDto) {
    return `This action adds a new cat with the following characteristics: ${cat.name}, ${cat.age} years old. Breed: ${cat.breed}.`;
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats.';
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
