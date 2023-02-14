import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Videos } from './videos';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ length: 100 })
  userName: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 100 })
  email: string;

  @Column({ type: 'boolean' })
  isAdmin = false;

  @OneToMany(() => Videos, (videos) => videos.user)
  videos: Videos[];


@Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column({nullable:true})
  dateModified:Date;
}
