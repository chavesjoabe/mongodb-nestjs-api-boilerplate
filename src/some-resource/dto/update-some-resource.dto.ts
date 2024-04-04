import { PartialType } from '@nestjs/mapped-types';
import { CreateSomeResourceDto } from './create-some-resource.dto';

export class UpdateSomeResourceDto extends PartialType(CreateSomeResourceDto) {}
