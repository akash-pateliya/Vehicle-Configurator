import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn("uuid")
    userUid: string;

    @Column()
    companyName: string;

    @Column()
    companyAddress: string;

    @Column()
    contactNumber: string;

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
