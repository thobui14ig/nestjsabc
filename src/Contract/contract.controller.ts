import { EditContractDto } from './dto/EditContract.dto';
import { ContractService } from './contract.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Connection, getConnection } from 'typeorm';
import { Attribute } from './../entity/attribute.entity';
import { Users } from 'src/entity/user.entity';
@Controller('contract')
export class ContractController {
    constructor(private contractService: ContractService){}
    @Get()
    findAll(){
        return this.contractService.getAll();
    }
    @Get("/attr")
    getAttr(){
        return this.contractService.getAttr();
    }

    @Get("/attrAndValue")
    async getAttrAndValue(){

        let data = []; //dành cho trang edit contract
        //colum attr
        const result = await getConnection()
        .createQueryBuilder()
        .select(["attribute.slug_name"])
        .from(Attribute, "attribute")
        .getMany();
        const columAttr = [];
        result.map(item => (
            columAttr.push(`{{${item.slug_name}}}`),
            data.push(item.slug_name)
        ))



        //colum user
        let columUser = getConnection().getMetadata(Users).ownColumns.map(column => column.propertyName)
        columUser = columUser.filter(item => item !== "id" && item !== "password")
        const newColumUser = [];
        columUser.map(item => (
            newColumUser.push(`{{${item}}}`)
        ))


        data = columUser.concat(data);

        columUser = newColumUser;



        return {
            columAttr, columUser, data
        };
    }

    //GET BYID
    @Get('/:id')
    findOne(@Param('id') id: number){
        return this.contractService.getOneById(id);
    }


    @Post('edit')

    insertProduct(@Body() editContractDto: EditContractDto){
        return this.contractService.updateContract(editContractDto["id"] ,editContractDto["content"])
        return editContractDto;
    }

    @Post('addAttr')
    
    async insertAttr(@Body() attr){
       const attribute = await this.contractService.addAttr(attr)
       console.log("ressult",attribute)
       return attribute;
    }


}
