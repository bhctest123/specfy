import type { CreationOptional } from 'sequelize';
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

import type { DBUser } from '../types/db/users';

@Table({ tableName: 'users', modelName: 'user' })
export class User extends Model<DBUser, Pick<DBUser, 'email' | 'name'>> {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: CreationOptional<string>;

  @Column
  declare name: string;

  @Column
  declare email: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  declare createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  declare updatedAt: Date;
}