import { Owner } from './owner.entity';
import { ManyToOne } from 'typeorm';
import { Column } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@Entity()
@Injectable()
@ObjectType()
export class Pet{
    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Field()
    @Column()
    name: string;

    @Column()
    @Field({nullable: true})
    type?: string

    @Column()
    @Field(type => Int)
    ownerId: number


    @ManyToOne(() => Owner, owner => owner.pets)
    @Field(type => Owner)
    owner: Owner;


    
    
}