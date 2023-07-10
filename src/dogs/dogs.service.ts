import { Injectable } from '@nestjs/common';
import { Dog } from './interfaces/dog.interface';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  private readonly dogs: Dog[] = [];

  create(dog: CreateDogDto) {
    console.log('Dogs before:', this.dogs);
    console.log('New dog:', dog);
    this.dogs.push(dog);
    console.log('Dogs after:', this.dogs);
  }

  findAll(): Dog[] {
    return this.dogs;
  }
}
