import { Attribute } from './../entity/attribute.entity';
import { Contract } from './../entity/contract.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractController } from './contract.controller';
import { Module } from '@nestjs/common';
import { ContractService } from './contract.service';

@Module({
  imports: [TypeOrmModule.forFeature([Contract, Attribute])],
  controllers: [ContractController],
  providers: [ContractService]
})
export class ContractModule {}
