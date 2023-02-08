import type { ForeignKey } from 'sequelize';
import {
  Model,
  Table,
  Column,
  DataType,
  Scopes,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';

import type { DBDocument } from '../types/db/documents';
import type { DBTypeHasUser } from '../types/db/typeHasUsers';

import { User } from './user';

@Scopes(() => ({
  // includes
  withUser: {
    include: [User],
  },
}))
@Table({
  tableName: 'type_has_users',
  modelName: 'typeHasUser',
  timestamps: false,
})
export class TypeHasUser extends Model<
  DBTypeHasUser,
  Pick<DBTypeHasUser, 'documentId' | 'role' | 'userId'>
> {
  @PrimaryKey
  @Column({ field: 'document_id', type: DataType.UUIDV4 })
  declare documentId: ForeignKey<DBDocument['id']>;

  @PrimaryKey
  @Column({ field: 'user_id', type: DataType.UUIDV4 })
  declare userId: string;

  @Column({ type: DataType.STRING })
  declare role: DBTypeHasUser['role'];

  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @BelongsTo(() => User, 'user_id')
  declare user: User;
}