import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ length: 40 })
  userId?: string;

  @Column({ length: 40 })
  videoId?: string;

  @Column({ length: 500 })
  comment?: string;


@Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column({nullable:true})
  dateModified:Date;
}
