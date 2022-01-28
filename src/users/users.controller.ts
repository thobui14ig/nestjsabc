import { Contract } from './../entity/contract.entity';
import { Attribute } from './../entity/attribute.entity';
import { Users } from 'src/entity/user.entity';
import { Connection, getConnection } from 'typeorm';
import { FileInterceptor } from '@nestjs/platform-express';
import { UsersService } from './users.service';
import { Body, ConsoleLogger, Controller, Get, Param, Post, UseInterceptors } from '@nestjs/common';
// import { ApiBearerAuth, ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import {getRepository} from "typeorm";

@Controller('user')
export class UsersController {
    constructor(private userService: UsersService){}
    //GETALL
    @Get('/column')
    getClumn(){
        const data = getConnection().getMetadata(Users).ownColumns.map(column => column.propertyName)
        return data;
        // return 1;
    }
    @Get()
    async getAll(){
        const user = await 
        getRepository(Users).createQueryBuilder("users")
        .leftJoinAndSelect("users.userToContract", "contract")
        
        .getMany();
        return user
    }

    //GET BYID
    @Get('/:id')
    findOne(@Param('id') id: number){
        return this.userService.getOneById(id);
    }

    //GET BYID
    @Get('/userAndAttr/:id')
    async findUserAndAttr(@Param('id') id: number){
        const user = await 
        getRepository(Users).createQueryBuilder("users")
        
        
        .leftJoinAndSelect("users.values", "value")
        .where("users.id = :id", { id: id })
        .getOne();
        const attr = await getRepository(Attribute).find(); 
        console.log(attr)

        return {
            "user": user,
            "attr" : attr
        } 
    }

    //GET BYID
    @Get('/contentContractByUser/:id')
    async getContentContractById(@Param('id') id: number){
        const user = await this.userService.getContentContractById(id);

        const contract = await getConnection()
        .createQueryBuilder()
        .select(["contract.id","contract.type_of_cotract"])
        .from(Contract, "contract")
        .getMany();
        console.log(contract)
        return {
            user: user,
            contract: contract
        }
    }
    






}
