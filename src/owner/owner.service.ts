import { Store } from './../entity/store.entity';
import { PetsService } from './../pets/pets.service';
import { Pet } from 'src/entity/pet.entity';
import { CreateOwnerInput } from './dto/create-owner-input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, createQueryBuilder } from 'typeorm';
import { Owner } from './../entity/owner.entity';
import { Injectable, forwardRef, Inject } from '@nestjs/common';

@Injectable()
export class OwnerService {
    constructor(    
        @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
        @Inject(forwardRef(() => PetsService))
        private petsService: PetsService,
    ){

    }

    //vd
    private owners: Owner[] = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Anna' },
    ];

    create(createOwnerInput: CreateOwnerInput){
        const newOwner = this.ownerRepository.create(createOwnerInput)
        return this.ownerRepository.save(newOwner)
    }

    findAll(){
        // console.log(1 + "nè")
        // return getRepository(Owner)
        // .createQueryBuilder("owner")
        // .getMany();
        return this.ownerRepository.find();
    }

    findOne(id: number){
        return this.ownerRepository.findOneOrFail(id)
    }

    // tìm pet của từng owner
    async petsOfOwner(owmerId: number){
        // chỗ này nên sử dụng petService để lấy dữ liệu nhưng không gọi petService được

        // -----------------------------------------có thể dùng cái này
        // const pets = await createQueryBuilder()
        // .select("pet")
        // .from(Pet, "pet")
        // .where("ownerId = :ownerId", { ownerId: owmerId })
        // .getMany();

        const data = await this.petsService.findAllByOwnerId(owmerId)
        console.log(data)
        return data;
    }


    //find by ids số nhiều
    async getOwnersByIds(ids: readonly number[]) {
        const result = await this.findAll();
        console.log("------------------------ownerService----------------------------")
        console.log(result.filter((u) => ids.includes(u.id)))
        return result.filter((u) => ids.includes(u.id));
    }


    //store of owwner
    async storeOfOwner(id: number){
        // chỗ này nên sử dụng petService để lấy dữ liệu nhưng không gọi petService được

        // -----------------------------------------có thể dùng cái này
        const store = await 
        getRepository(Store)
        .createQueryBuilder("store")
        .leftJoinAndSelect("store.owners", "owner")
        .where("owner.id = :id", { id: id })
        .getMany();

        console.log(store)
        return store;
    }





}
