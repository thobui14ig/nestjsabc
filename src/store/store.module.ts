import { OwnerModule } from './../owner/owner.module';
import { Store } from './../entity/store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreResolver } from './store.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Store]), forwardRef(() => OwnerModule)],
  providers: [StoreService, StoreResolver]
})
export class StoreModule {}
