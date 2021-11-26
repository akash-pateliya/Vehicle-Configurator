import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("error-log")
export class ErrorLog {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    module: string;

    @Column()
    function: string;

    @Column()
    status: number;

    @Column("double")
    userId: number;

    @Column()
    requestPath: string;

    @Column("longtext")
    error: string

    @CreateDateColumn()
    responseTime: string;
}
