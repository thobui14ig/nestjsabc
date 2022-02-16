import { getRepository } from 'typeorm';
import { Owner } from '../entity/owner.entity';
import * as DataLoader from 'dataloader';
import { PetsService } from '../pets/pets.service';

export function ownerToPetLoader(petService: PetsService) {
  return new DataLoader(async (ids: number[]) => {
    
    const result = await getRepository(Owner)
      .createQueryBuilder('owner')
      .leftJoinAndSelect('owner.pets', 'pets')
      .where('owner.id IN (:...ids)', { ids })
      
      .getMany();


      console.log(result.map(pet => pet.pets))
      return result.map(pet => pet.pets)
      // return poll
    
  });
}