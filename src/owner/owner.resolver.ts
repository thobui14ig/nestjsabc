import { AuthGuard } from '@nestjs/passport';
import DataLoader from 'dataloader';
import { getConnection } from 'typeorm';
import { Pet } from 'src/entity/pet.entity';
import { CreateOwnerInput } from './dto/create-owner-input';
import { Owner } from './../entity/owner.entity';
import { OwnerService } from './owner.service';
import { Resolver, Mutation, Args, Int, Query, ResolveField, Parent, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

@Resolver(of => Owner)
export class OwnerResolver {
    constructor(
        private readonly ownerService: OwnerService,
        
        ){
            
    }

    @Mutation(() => Owner)
    createOwner(@Args('createOwnerInput') obj: CreateOwnerInput){
        console.log(1)
        return this.ownerService.create(obj)
    }


    @Query(() => [Owner], {name: 'owners'})
    async findAll(){
        return this.ownerService.findAll();
    }

    @Query(() => Owner, {name: 'owner'})
    findOne(@Args('id', {type: () => Int}) id: number){
        return this.ownerService.findOne(id)
    }


    @Query(returns => Owner)
    async author(@Args('id', { type: () => Int }) id: number) {
      return this.ownerService.findOne(id);
    }
    // //get pet
    // @ResolveField(() => [Pet]) có thể là...
    @ResolveField()
    async pets(@Parent() owner: Owner, @Context('ownerToPetLoader') ownerToPetLoader: DataLoader<number, Owner>) {
      const { id } = owner;
 
      return ownerToPetLoader.load(id)

    //   const { id } = owner;
    //   return this.ownerService.petsOfOwner(id);
    }


    @ResolveField()
    async stores(@Parent() owner: Owner, @Context('ownerToStoreLoader') ownerToStoreLoader: DataLoader<number, Owner>) {
      const { id } = owner;
 
      return ownerToStoreLoader.load(id)

    //   const { id } = owner;
      // return this.ownerService.storeOfOwner(id);
    }


}
