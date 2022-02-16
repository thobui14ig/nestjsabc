import { UserToContract } from './contract_details.entity';
import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@Injectable()
export class Cat{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    age: number;





}