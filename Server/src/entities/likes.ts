import { Entity,  Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Likes {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ length: 40 })
  userId?: string;

  @Column({ length: 40 })
  videoId?: string;
  

@Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column({nullable:true})
  dateModified:Date;
}
