import { Test, TestingModule } from '@nestjs/testing';
import { HllloController } from './hlllo.controller';
import { HllloService } from './hlllo.service';

describe('HllloController', () => {
  let controller: HllloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HllloController],
      providers: [HllloService],
    }).compile();

    controller = module.get<HllloController>(HllloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
