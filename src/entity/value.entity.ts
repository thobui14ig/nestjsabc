import { Attribute } from './attribute.entity';
import { Users } from 'src/entity/user.entity';
import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@Injectable()
export class Value{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    attribute_id: number;
    @Column()
    entity_id: number;
    @Column()
    value: string;
    @Column()
    data_type: number;

    @ManyToOne(type => Users, user => user.values)
    user: Users;
    @ManyToOne(type => Attribute, attr => attr.values)
    attr: Attribute;

}