import { ApiProperty } from '@nestjs/swagger';
import { Base } from 'src/common/base';
import { Column, Entity } from 'typeorm';

@Entity()
export class User extends Base {
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
   * * Last Name Column
   */
    @ApiProperty()
    @Column({
      nullable: false,
      default: '',
    })
    last_name: string;

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
   * * birthday Column
   */
   @ApiProperty()
   @Column({
     nullable: false,
     default: '',
   })
   birthday: string;
 
    /**
   * * age Column
   */
  @ApiProperty()
  @Column({
    nullable: false,
    default: '',
  })
  age: string;


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
