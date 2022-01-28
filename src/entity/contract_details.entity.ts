import { Contract } from './contract.entity';
import { Users } from 'src/entity/user.entity';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserToContract{
    @PrimaryGeneratedColumn()
    public userToContractId!: number;

    @Column()
    public userId!: number;

    @Column()
    public contractId!: number;



    @Column()
    public content!: string;

    @ManyToOne(() => Users, user => user.userToContract)
    public user!: Users;

    @ManyToOne(() => Contract, contract => contract.userToContract)
    public contract!: Contract;
}