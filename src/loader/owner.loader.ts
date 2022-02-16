import { Store } from '../entity/store.entity';
import { getRepository } from 'typeorm';
import { OwnerService } from '../owner/owner.service';
import { Owner } from '../entity/owner.entity';
import * as DataLoader from 'dataloader';


import { mapFromArray } from 'src/util';

export function petToOwnerLoader(ownersService: OwnerService) {
  return new DataLoader<number, Owner>(async (ids) => {
    
    const owners = await ownersService.getOwnersByIds(ids);
    return owners
  });
}


export function ownerToStoreLoader() {
  return new DataLoader(async (ids: number[]) => {
    console.log(ids)
    const stores = await 
    getRepository(Owner)
    .createQueryBuilder("owner")
    .leftJoinAndSelect("owner.stores", "store")
    .where('owner.id IN (:...ids)', { ids })
    .getMany();


    console.log(stores)
      return stores.map(item => item.stores)

    
  });
}




