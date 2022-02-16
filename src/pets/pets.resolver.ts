import { Owner } from './../entity/owner.entity';
import { UpdatePetInput } from './dto/update-pet-input';
import { CreatePetInput } from './dto/create-pet-input';
import { Pet } from './../entity/pet.entity';
import { PetsService } from './pets.service';
import { Resolver, Query, Mutation, Args, Int, Parent, ResolveField, Context } from '@nestjs/graphql';
import DataLoader from 'dataloader';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService: PetsService){}

    //tìm 1
    @Query(returns => Pet)
    getPet(@Args ('id', {type: () => Int}) id: number){
        return this.petService.findOne(id)
    }


    //lấy tất cả
    @Query(returns => [Pet])
    pets(): Promise<Pet[]>{
        return this.petService.findAll();
    }

    // thêm súc vât
    @Mutation(returns => Pet)
    createPet(@Args('createPetInput') obj: CreatePetInput): Promise<Pet>{
        return this.petService.createPet(obj)
    }
    //edit
    @Mutation(returns => Pet)
    updatePet(@Args ('id', {type: () => Int}) id: number, @Args('updatePetInput') obj: UpdatePetInput): Promise<Pet>{
        return this.petService.updatePet(id, obj)
    }

    //delete
    @Mutation(() => Number)
    deletePet(@Args ('id', {type: () => Int}) id: number){
        console.log(id)
        this.petService.deletePet(id)
        
        return id;
    }

    //get owwner
    @ResolveField(returns => Owner)
    owner(@Parent() pet: Pet, @Context('petToOwnerLoader') petToOwnerLoader: DataLoader<number, Owner>): Promise<Owner>{
        //  const { ownerId } = pet;
        // return this.petService.getOwner(pet.ownerId)

        // console.log("5254564564564")
        const { ownerId } = pet;
        return petToOwnerLoader.load(ownerId)
    }



}
