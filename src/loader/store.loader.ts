import { Store } from './../entity/store.entity';
import { getRepository } from 'typeorm';
import * as DataLoader from 'dataloader';

export function storeToOwnerLoader() {
    return new DataLoader(async (ids: number[]) => {
      console.log(ids)
      const owners = await 
      getRepository(Store)
      .createQueryBuilder("store")
      .leftJoinAndSelect("store.owners", "owner")
      .where('store.id IN (:...ids)', { ids })
      .getMany();
  
  
      console.log(owners.map(item => item.owners))
        return owners.map(item => item.owners)
  
      
    });
  }



