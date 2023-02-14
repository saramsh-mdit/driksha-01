import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class VideoInfo {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  fieldname: string;

  @Column()
  originalname: string;

  @Column()
  encoding: string;

  @Column()
  mimetype: string;

  @Column()
  destination: string;

  @Column()
  filename: string;

  @Column()
  path: string;

  @Column()
  size: number;

  @Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column({nullable:true})
  dateModified:Date;
}
