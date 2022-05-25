import { EntityModel } from '@midwayjs/orm';
import { BaseEntity } from '@cool-midway/core';
import { Column } from 'typeorm';

/**
 * 描述
 */
@EntityModel('family_vidoes')
export class FamilyVideosEntity extends BaseEntity {
  @Column({ comment: '标题' })
  title: string;

  @Column({ comment: '描述' })
  desc: string;

  @Column({ comment: '地址' })
  url: string;

  @Column({ comment: '状态' })
  status: number;
}
