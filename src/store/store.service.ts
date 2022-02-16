import { OwnerService } from './../owner/owner.service';
import { getRepository } from 'typeorm';
import { Owner } from './../entity/owner.entity';
import { Store } from './../entity/store.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository, createQueryBuilder, Connection } from 'typeorm';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store) private storeRepository: Repository<Store>,
        private ownerService: OwnerService
    ){

    }

    findAll(){
        return this.storeRepository.find();
    }

    findOne(id: number){
        return this.storeRepository.findOneOrFail(id)
    }

    // tìm owoner của từng store
    async ownersOfStore(id: number){
        // chỗ này nên sử dụng petService để lấy dữ liệu nhưng không gọi petService được

        // -----------------------------------------có thể dùng cái này
        const owners = await 
        getRepository(Owner)
        .createQueryBuilder("owner")
        .leftJoinAndSelect("owner.stores", "store")
        .where("store.id = :id", { id: id })
        .getMany();

        console.log(owners)
        return owners;
    }

}
