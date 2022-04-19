import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankAccount } from "./bank-acc.entity";
import { Contact } from "./contact.entity";
import { Tag } from "./tag.entity";

@Entity()
export class Customer{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phoneNo: number;

    //Constraints
    @OneToMany(() => Contact, contacts => contacts.customer)
    contacts: Contact[]

    @OneToOne(() => BankAccount, bankAcc => bankAcc.customer)
    bankAcc: BankAccount
    
    
    @OneToMany(() => Tag, tags => tags.customer)
    tags:Tag[]


}