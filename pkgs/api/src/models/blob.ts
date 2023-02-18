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

import type { DBBlob } from '../types/db/blobs';

import type { Org } from './org';
import type { Project } from './project';

@Table({ tableName: 'blobs', modelName: 'blob' })
export class Blob extends Model<
  DBBlob,
  Pick<
    DBBlob,
    'blob' | 'deleted' | 'orgId' | 'parentId' | 'projectId' | 'type' | 'typeId'
  >
> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: CreationOptional<string>;

  @Column({ field: 'org_id', type: DataType.STRING })
  declare orgId: ForeignKey<Org['id']>;

  @Column({ field: 'project_id', type: DataType.UUIDV4 })
  declare projectId: ForeignKey<Project['id']>;

  @Column
  declare type: string;

  @Column({ field: 'type_id' })
  declare typeId: string;

  @Column({ field: 'parent_id' })
  declare parentId: string;

  @Column({ type: DataType.JSON })
  declare blob: CreationOptional<DBBlob['blob']>;

  @Column({ type: DataType.BOOLEAN })
  declare deleted: CreationOptional<DBBlob['deleted']>;

  @CreatedAt
  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  declare updatedAt: Date;
}
