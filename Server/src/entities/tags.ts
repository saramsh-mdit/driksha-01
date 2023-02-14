import { Entity,  Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tags {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ length: 40 })
  name?: string;
  

@Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column({nullable:true})
  dateModified:Date;
}
