import { PetsModule } from './../pets/pets.module';
import { Owner } from './../entity/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerResolver } from './owner.resolver';

@Module({
  // imports: [TypeOrmModule.forFeature([Owner]), forwardRef(() => PetsModule)],
  imports: [TypeOrmModule.forFeature([Owner]), forwardRef(() => PetsModule)],

  providers: [OwnerService, OwnerResolver],
  exports: [OwnerService]
})
export class OwnerModule {}
