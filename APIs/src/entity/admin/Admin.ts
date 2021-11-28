import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("admins")
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    adminUid: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_on: string;

    @UpdateDateColumn()
    updated_on: string;
}
