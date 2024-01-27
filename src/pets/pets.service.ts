import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './entities/pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
  ) {}

  async create(createPetDto: CreatePetDto): Promise<Pet> {
    const pet = this.petRepository.create(createPetDto);
    return this.petRepository.save(pet);
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find();
  }

  async findOne(id: number): Promise<Pet> {
    return this.petRepository.findOne(id);
  }

  async update(id: number, updatePetDto: UpdatePetDto): Promise<Pet> {
    await this.petRepository.update(id, updatePetDto);
    return this.petRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.petRepository.delete(id);
  }
}
