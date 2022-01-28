

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ContractModule } from './contract/contract.module';


@Module({
imports: [
  TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'hdld',
    entities: ["dist/**/*.entity{.ts,.js}"],

    "migrationsTableName": "custom_migration_table",
    "migrations": ["migration/*.js"],
    "cli": {
        "migrationsDir": "migration"
    },
  synchronize: true
    // autoLoadEntities: true,
  }),

  UsersModule,

  ContractModule,

  ],
  controllers: [],
  providers: [],
})  
export class AppModule {}
