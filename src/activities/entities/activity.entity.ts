import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  activityID: number;

  @Column()
  activityName: string;

  @Column()
  effectOnStats: string; // This could also be a more complex structure or a relation to a stats effect entity
}
