import { TestBed } from '@automock/jest';
import { SomeResourceService } from './some-resource.service';

describe('SomeResourceService', () => {
  let service: SomeResourceService;

  beforeEach(async () => {
    const { unit } = TestBed.create(SomeResourceService).compile();

    service = unit;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
