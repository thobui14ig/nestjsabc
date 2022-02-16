import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HllloService } from './hlllo.service';
import { CreateHllloDto } from './dto/create-hlllo.dto';
import { UpdateHllloDto } from './dto/update-hlllo.dto';

@Controller('hlllo')
export class HllloController {
  constructor(private readonly hllloService: HllloService) {}

  @Post()
  create(@Body() createHllloDto: CreateHllloDto) {
    return this.hllloService.create(createHllloDto);
  }

  @Get()
  findAll() {
    return this.hllloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hllloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHllloDto: UpdateHllloDto) {
    return this.hllloService.update(+id, updateHllloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hllloService.remove(+id);
  }
}
