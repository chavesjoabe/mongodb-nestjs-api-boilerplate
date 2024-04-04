import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { SomeResource } from './schemas/some-resource.schema';
import { FactoryDbService } from '@core/services/factoryDB.service';

@Injectable()
export class SomeResourceService {
  readonly appRepository: FactoryDbService;
  constructor(
    @InjectModel(SomeResource.name)
    readonly someResourceModel: Model<any>,
  ) { this.appRepository = new FactoryDbService(this.someResourceModel) }

  public async findAll(): Promise<any[]> {
    return this.appRepository.findAll();
  }
}

