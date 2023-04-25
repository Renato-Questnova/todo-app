import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';
import { ConfigModule } from '@nestjs/config';
const ENV = process.env.NODE_ENV;
console.log(ENV);
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: !ENV ? '.env' : `.${ENV}.env`
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: entities, // you can also do this entities:[ user ], So you can delete the index.ts
      synchronize: true, //set this false in production mode
    }),
    UserModule],
})
export class AppModule {}
