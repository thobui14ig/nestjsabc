import { UserToContract } from './contract_details.entity';
import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@Injectable()
export class Contract{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    type_of_cotract: string;
    @Column("longtext")
    content_contract: string;

    @OneToMany(() => UserToContract, userToContract => userToContract.contract)
    public userToContract!: UserToContract[];




  




}