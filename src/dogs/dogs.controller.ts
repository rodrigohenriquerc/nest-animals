import { Controller, Get, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from './dto/create-dog.dto';
import { Dog } from './interfaces/dog.interface';

@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Post()
  create(dog: CreateDogDto) {
    console.log('Dog:', dog);
    this.dogsService.create(dog);
  }

  @Get()
  findAll(): Dog[] {
    return this.dogsService.findAll();
  }
}
