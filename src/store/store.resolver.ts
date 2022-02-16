import DataLoader from 'dataloader';
import { Store } from './../entity/store.entity';
import { StoreService } from './store.service';
import { Resolver, Query, ResolveField, Parent, Context } from '@nestjs/graphql';

@Resolver(of => Store)
export class StoreResolver {
    constructor(private readonly storeService: StoreService){

    }

    @Query(() => [Store], {name: "stores"})
    findAll(): Promise<Store[]>{
        return  this.storeService.findAll();
    }

    @ResolveField()
    async owners(@Parent() store: Store, @Context('storeToOwnerLoader') storeToOwnerLoader: DataLoader<number, Store>) {
      
      const { id } = store;

    //   return  this.storeService.ownersOfStore(id);
      return storeToOwnerLoader.load(id)
    }


}
