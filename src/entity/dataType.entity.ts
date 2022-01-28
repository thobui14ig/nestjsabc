import { Injectable } from "@nestjs/common";
import {Column, Entity, getConnection, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
@Injectable()
export class DataType{

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;

}