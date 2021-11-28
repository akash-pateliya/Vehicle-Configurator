import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("request_log")
export class RequestLog {
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
  body: string;

  @Column()
  params: string;

  @CreateDateColumn()
  requestTime: string;
}
