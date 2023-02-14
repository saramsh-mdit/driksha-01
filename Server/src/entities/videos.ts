import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
  JoinColumn,
  ManyToMany,
} from 'typeorm';

import { Tags } from './tags';
import { Users } from './users';
import { VideoInfo } from './videoInfo';

@Entity()
export class Videos {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ length: 100 })
  title?: string;

  @Column('text')
  description?: string;

  @OneToOne(() => VideoInfo)
  @JoinColumn()
  videoInfo: VideoInfo;

  @ManyToOne(() => Users, (user) => user.videos)
  user: Users;

  @ManyToMany(()=>Tags)
  tags:Tags[];


@Column({nullable:false, default: new Date()})
  dateCreated:Date;

  @Column({nullable:true})
  dateModified:Date;

}
