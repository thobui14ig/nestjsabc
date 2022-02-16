import { Module } from '@nestjs/common';
import { HllloService } from './hlllo.service';
import { HllloController } from './hlllo.controller';

@Module({
  controllers: [HllloController],
  providers: [HllloService]
})
export class HllloModule {}
