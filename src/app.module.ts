import { PetsService } from './pets/pets.service';
import { GraphQLModule } from '@nestjs/graphql';


import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ContractModule } from './contract/contract.module';
import { PetsModule } from './pets/pets.module';
import { OwnerModule } from './owner/owner.module';
import { AuthModule } from './auth/auth.module';
import { ownerToStoreLoader, petToOwnerLoader } from './loader/owner.loader';
import { OwnerService } from './owner/owner.service';
import { join } from 'path';
import { ownerToPetLoader } from './loader/pets.loader';
import { StoreModule } from './store/store.module';
import { storeToOwnerLoader } from './loader/store.loader';






@Module({
imports: [
  GraphQLModule.forRootAsync({
    imports: [OwnerModule, PetsModule, StoreModule],
    useFactory: (ownerService: OwnerService, petService: PetsService) => ({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      context: () => ({
        randomValue: Math.random(),
        petToOwnerLoader: petToOwnerLoader(ownerService),
        ownerToStoreLoader: ownerToStoreLoader(),
        storeToOwnerLoader: storeToOwnerLoader(),
        ownerToPetLoader: ownerToPetLoader(petService),
      }),
    }),
    inject: [OwnerService, PetsService],
  }),
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
    synchronize: true,
    logging:"all"
    // autoLoadEntities: true,
  }),
  UsersModule,
  ContractModule,
  PetsModule,
  OwnerModule,
  AuthModule,
  StoreModule,






  ],
  controllers: [],
  providers: [],
})  
export class AppModule {}
