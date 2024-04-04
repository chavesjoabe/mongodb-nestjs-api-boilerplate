import { Controller, Get } from '@nestjs/common';
import { SomeResourceService } from './some-resource.service';

@Controller('some-resource')
export class SomeResourceController {
  constructor(private readonly someResourceService: SomeResourceService) {}

  @Get()
  findAll() {
    return this.someResourceService.findAll();
  }
}
