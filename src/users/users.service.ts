import { getRepository } from 'typeorm';

import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Connection, Repository } from 'typeorm';
import { Users } from '../entity/user.entity';



@Injectable()
@UsePipes(new ValidationPipe())
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly userRepository: Repository<Users>
    ) {
      
    }

      //GET ALL
    async getAll(): Promise<Users[]> {
        return this.userRepository.find();
    }

    //GET BYID
    getOneById(id: number): any{
        let user = this.userRepository.findOneOrFail(id);
        if(user){
            return user;
        } else{
            return "Không tìm thấy";
        }

    }

    async getContentContractById(id: number){
        const user = await getRepository(Users).findOneOrFail(id, { relations: ["userToContract"] });
        return user
    }


}



