import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, TableCheck } from "typeorm";
import { Customer } from "./customer.enity";
import { Tag } from "./tag.entity";

@Entity()
export class BankAccount{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    accNo: number;

    @Column()
    sortCode: number;

    //Constraints
    @OneToOne(() => Customer)
    customer: Customer

    @OneToMany(() => Tag, tags => tags.bankAcc)
    tags: Tag[]
}

