import { Owner } from './owner.entity';

import { Column, ManyToMany, OneToMany } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@Injectable()
@ObjectType()

export class Store{
    @PrimaryGeneratedColumn()
    @Field((type => Int))
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    address: string;

    @ManyToMany(() => Owner, owner => owner.stores)
    @Field(type => [Owner],{nullable: true})
    owners?: Owner[];

}