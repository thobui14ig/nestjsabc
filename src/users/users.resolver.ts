import { CreateInputUser } from './dto/create-user-input';
import { Users } from 'src/entity/user.entity';
import { UsersService } from './users.service';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

@Resolver(of => Users)
export class UsersResolver {
    constructor(private userService: UsersService){}

    //lấy tất cả
    @Query(returns => [Users])
    users(): Promise<Users[]>{
        return this.userService.getAll();
    }

    //find id
    @Query(() => Users)
    user(@Args ('id', {type: () => Int}) id: number){
        return this.userService.getOneById(id)
    }
    //find name
    @Query(() => Users)
    async findUserByName(@Args ('name', {type: () => String}) name: string){
        const result = await this.userService.getUserByName(name)
        console.log(result)
        return result
    }

    @Mutation(() => Users)
    createUser(@Args('createInputUser') obj: CreateInputUser): Promise<Users>{
        return this.userService.createUser(obj)
    }
}
