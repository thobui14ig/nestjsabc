import { Injectable } from '@nestjs/common';
import { CreateHllloDto } from './dto/create-hlllo.dto';
import { UpdateHllloDto } from './dto/update-hlllo.dto';

@Injectable()
export class HllloService {
  create(createHllloDto: CreateHllloDto) {
    return 'This action adds a new hlllo';
  }

  findAll() {
    return `This action returns all hlllo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hlllo`;
  }

  update(id: number, updateHllloDto: UpdateHllloDto) {
    return `This action updates a #${id} hlllo`;
  }

  remove(id: number) {
    return `This action removes a #${id} hlllo`;
  }
}
