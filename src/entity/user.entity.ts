import { UserToContract } from './contract_details.entity';
import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Value } from "./value.entity";

@Entity()
@Injectable()
export class Users{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    email: string;

    @Column()

    password: string;
    @Column()
    phone: string;
    @Column()
    address: string

  
    @OneToMany(type => Value, value => value.user)
    values: Value[];

    @OneToMany(() => UserToContract, userToContract => userToContract.user)
    public userToContract!: UserToContract[];


  
}