import { Store } from './store.entity';
import { Pet } from './pet.entity';
import { Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
@Entity()
@Injectable()
@ObjectType()
export class Owner{
    @PrimaryGeneratedColumn()
    @Field((type => Int))
    id: number;

    @Field()
    @Column()
    name: string;

    @OneToMany(() => Pet, pet => pet.owner)
    @Field(type => [Pet], {nullable: true})
    pets?: Pet[]

    @ManyToMany(() => Store, store => store.owners)
    @Field(type => [Store],{nullable: true})
    @JoinTable()
    stores?: Store[];

}