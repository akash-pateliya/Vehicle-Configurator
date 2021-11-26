import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("admins")
export class Admin {
    @PrimaryGeneratedColumn()
    AdminId: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    // @Column("simple-json")
    // address: { street: string; city: string; state: string; pin_code: number };

    @CreateDateColumn()
    created_on: string;

    @UpdateDateColumn()
    updated_on: string;
}
