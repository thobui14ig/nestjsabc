import { OwnerService } from './../owner/owner.service';
import { UpdatePetInput } from './dto/update-pet-input';
import { CreatePetInput } from './dto/create-pet-input';
import { InjectRepository } from '@nestjs/typeorm';
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Pet } from '../entity/pet.entity';
import { Repository } from 'typeorm';
import { Owner } from '../entity/owner.entity';

@Injectable()
export class PetsService {
    constructor(
        @InjectRepository(Pet) private readonly petRepository: Repository<Pet>,

        @Inject(forwardRef(() => OwnerService))
        private ownerService: OwnerService,
    ) {
      console.log(ownerService);
      console.log(petRepository)

    }

    async createPet(obj: CreatePetInput): Promise<Pet>{
        console.log(obj)
        const newPet = await this.petRepository.create(obj)
        return this.petRepository.save(newPet)
        
    }

    //tìm 1
    async findOne(id: number): Promise<Pet> {
        const result = await this.petRepository.findOneOrFail(id)
        return result;
    }

    async findAll(): Promise<Pet[]>{
        const result = await this.petRepository.find();
        return result;
    }

    //update
    async updatePet(id: number, obj: UpdatePetInput): Promise<Pet>{
        console.log(obj)
        const pet = await this.petRepository.findOneOrFail(id);
        pet.name = obj.name;
        pet.ownerId = obj.ownerId;

        return this.petRepository.save(pet)
        
    }

    //delete 
    async deletePet(id: number){
        const pet = await this.petRepository.findOneOrFail(id);
        
        return this.petRepository.remove(pet);      

    }

    //get owner
    async getOwner(ownerId: number): Promise<Owner>{
        return await this.ownerService.findOne(ownerId)
    }

    //findall pet by ownerId
    async findAllByOwnerId(id: number): Promise<Pet[]>{
        const result = await this.petRepository.find({ownerId: id});
        return result;
    }

    //find by ids số nhiều
    async getOwnersByIds(ids: readonly number[]) {
        
        const result = await this.findAll();
        console.log("--------------PetService---------------")
        // console.log(result.filter((u) => ids.includes(u.ownerId)))
        return result
    }



}
