import { OwnerModule } from './../owner/owner.module';
import { Pet } from './../entity/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Pet]),forwardRef(() => OwnerModule) ],
  providers: [PetsService, PetsResolver],
  exports: [PetsService]
})
export class PetsModule {}
