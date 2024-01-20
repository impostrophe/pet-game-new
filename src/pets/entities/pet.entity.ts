import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Pet {
  @PrimaryGeneratedColumn()
  petID: number;

  @ManyToOne(() => User, (user) => user.userID)
  @JoinColumn({ name: 'userID' })
  user: User;

  @Column()
  petName: string;

  @Column()
  petType: string;

  @Column()
  adoptionDate: Date;
}
