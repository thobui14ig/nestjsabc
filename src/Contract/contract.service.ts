import { Attribute } from './../entity/attribute.entity';
import { EditContractDto } from './dto/EditContract.dto';
import { Contract } from './../entity/contract.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class ContractService {
    constructor(
        @InjectRepository(Contract) private readonly contractRepository: Repository<Contract>,
        @InjectRepository(Attribute) private readonly attrRepository: Repository<Attribute>

    ) {}

      //GET ALL
    getAll(){
        return this.contractRepository.find();
    }
    //GET BYID
    getOneById(id: number): any{
        let contract = this.contractRepository.findOneOrFail(id);
        if(contract){
            return contract;
        } else{
            return "Không tìm thấy";
        }

    }
    //get arrt
    getAttr(){
        return this.attrRepository.find();
    }

    async updateContract(id ,content: EditContractDto): Promise<Contract> {
        try {
            console.log(id)
            const contract = await this.getOneById(id);
            contract.content_contract = content;
           

            return this.contractRepository.save(contract);
        } catch (error) {
            throw error;
        }
        
    }

    async addAttr(attr){
        const newAttr = new Attribute;
        newAttr.name = attr["attr"];
        newAttr.slug_name = "hehe";
        const attribute = await this.attrRepository.save(newAttr);

        return attribute;

    }
}
