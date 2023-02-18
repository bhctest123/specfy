import type { CreationOptional, ForeignKey } from 'sequelize';
import {
  Model,
  CreatedAt,
  UpdatedAt,
  Table,
  PrimaryKey,
  Default,
  Column,
  DataType,
} from 'sequelize-typescript';

import type { DBRevision } from '../types/db/revisions';

import type { Org } from './org';
import type { Project } from './project';

@Table({ tableName: 'revisions', modelName: 'revision' })
export class Revision extends Model<
  DBRevision,
  Pick<
    DBRevision,
    'changes' | 'description' | 'orgId' | 'parentId' | 'projectId' | 'title'
  >
> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: CreationOptional<string>;

  @Column({ field: 'parent_id', type: DataType.STRING })
  declare parentId: ForeignKey<string>;

  @Column({ field: 'org_id', type: DataType.STRING })
  declare orgId: ForeignKey<Org['id']>;

  @Column({ field: 'project_id', type: DataType.UUIDV4 })
  declare projectId: ForeignKey<Project['id']>;

  @Column
  declare title: string;

  @Column({ type: DataType.JSON })
  declare description: CreationOptional<DBRevision['description']>;

  @Column({ type: DataType.JSON })
  declare changes: CreationOptional<DBRevision['changes']>;

  @CreatedAt
  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  declare updatedAt: Date;
}