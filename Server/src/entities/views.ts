import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Views {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  views?: number = 0;

  @Column({ length: 40 })
  videoId?: string;
  

@Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column()
  dateModified:Date ;
}
