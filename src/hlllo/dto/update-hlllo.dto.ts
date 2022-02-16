import { PartialType } from '@nestjs/swagger';
import { CreateHllloDto } from './create-hlllo.dto';

export class UpdateHllloDto extends PartialType(CreateHllloDto) {}
