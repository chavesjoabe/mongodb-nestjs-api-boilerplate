import { Logger, Module } from '@nestjs/common';
import { SomeResourceService } from './some-resource.service';
import { SomeResourceController } from './some-resource.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SomeResourceSchema } from './schemas/some-resource.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'SomeResource', schema: SomeResourceSchema, collection: 'SomeResource' },
    ]),
  ],
  controllers: [SomeResourceController],
  providers: [Logger, SomeResourceService],
})
export class SomeResourceModule { }
