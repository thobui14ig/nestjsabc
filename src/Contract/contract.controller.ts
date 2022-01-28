import { EditContractDto } from './dto/EditContract.dto';
import { ContractService } from './contract.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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
