import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity("vehicles")
export class Vehicle {
    @PrimaryGeneratedColumn("uuid")
    vehicleUid: string;

    @Column()
    segment: string;

    @Column()
    manufacturer: string;

    @Column()
    variant: string;

    @CreateDateColumn()
    created_on: string;

    @UpdateDateColumn()
    updated_on: string;
}
