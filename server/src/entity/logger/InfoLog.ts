import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("info-log")
export class InfoLog {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    module: string;

    @Column()
    function: string;

    @Column("double")
    userId: number;

    @Column()
    requestPath: string;

    @Column()
    status: number

    @CreateDateColumn()
    responseTime: string;

    @Column("longtext")
    response: string;
}
