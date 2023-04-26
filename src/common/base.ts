
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export abstract class Base {
  /**
   * id
   */
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  /**
   * created_date
   */
  @CreateDateColumn()
  created_date: Date;

  /**
   * updated_date
   */
  @UpdateDateColumn()
  updated_date: Date;
}
