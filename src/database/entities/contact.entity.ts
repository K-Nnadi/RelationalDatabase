import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customer.enity";
import { Tag } from "./tag.entity";

@Entity()
export class Contact{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string

    @Column()
    phoneNo: number

    //Constraints
    @ManyToOne(() => Customer)
    customer:Customer

    @OneToMany(() => Tag, tags => tags.contacts)
    tags: Tag[]
}
