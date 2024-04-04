import { Test, TestingModule } from '@nestjs/testing';
import { SomeResourceController } from './some-resource.controller';
import { SomeResourceService } from './some-resource.service';

describe('SomeResourceController', () => {
  let controller: SomeResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SomeResourceController],
      providers: [SomeResourceService],
    }).compile();

    controller = module.get<SomeResourceController>(SomeResourceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
