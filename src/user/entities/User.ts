import { ApiProperty } from '@nestjs/swagger';
import { Base } from 'src/common/base';
import { Gender } from 'src/common/status';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User extends Base {
  /**
   * * Gender Column
   */
  @ApiProperty()
  @Column({
    type: 'enum',
    enum: Gender,
    default: Gender.MALE,
  })
  Gender: Gender;

  /**
   * * First Name Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  first_name: string;

  /**
   * * Middle Name Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  middle_name: string;

  /**
   * * Last Name Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  last_name: string;

  /**
   * * Home Address Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  home_address: string;

  /**
   * * Email Address Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  email_address: string;
  /**
   * * username Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  /**
   * * Password Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  password: string;

  /**
   * * Relations Code write it below the main property
   */

}
