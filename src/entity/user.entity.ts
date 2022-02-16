import { Field, ObjectType } from '@nestjs/graphql';
import { UserToContract } from './contract_details.entity';
import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Value } from "./value.entity";

@Entity()
@Injectable()
@ObjectType()
export class Users{

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    email: string;

    @Column()
    @Field()
    password: string;
    
    @Column({nullable: true})
    @Field({nullable: true})
    phone: string;

    @Column({nullable: true})
    @Field({nullable: true})
    address: string

  
    @OneToMany(type => Value, value => value.user)
    values: Value[];

    @OneToMany(() => UserToContract, userToContract => userToContract.user)
    public userToContract!: UserToContract[];


  
}