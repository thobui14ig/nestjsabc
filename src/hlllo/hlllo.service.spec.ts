import { Test, TestingModule } from '@nestjs/testing';
import { HllloService } from './hlllo.service';

describe('HllloService', () => {
  let service: HllloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HllloService],
    }).compile();

    service = module.get<HllloService>(HllloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
