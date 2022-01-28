import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { Value } from "./value.entity";

@Entity()
@Injectable()
export class Attribute{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    slug_name: string;
    @Column()
    entityType: number;

    @OneToMany(type => Value, value => value.attr)
    values: Value[];

}