import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  username: string;

  @Column({ nullable: true })
  email: string;

  @Column()
  accountCreationDate: Date;

  @Column({ nullable: true })
  lastLogin: Date;
}
