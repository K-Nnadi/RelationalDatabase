import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankAccount } from "./bank-acc.entity";
import { Contact } from "./contact.entity";
import { Customer } from "./customer.enity";


@Entity()
export class Tag{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    tagName: number;

    @Column()
    tagCode: number;
    
    
    //Constraints
    @ManyToOne(() => Customer)
    customer: Customer

    @ManyToOne(() => Contact)
    contacts: Contact

    @ManyToOne(() => BankAccount)
    bankAcc: BankAccount
}
