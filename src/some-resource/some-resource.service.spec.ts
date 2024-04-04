import { Test, TestingModule } from '@nestjs/testing';
import { SomeResourceService } from './some-resource.service';

describe('SomeResourceService', () => {
  let service: SomeResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SomeResourceService],
    }).compile();

    service = module.get<SomeResourceService>(SomeResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
