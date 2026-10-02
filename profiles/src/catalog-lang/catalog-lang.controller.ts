import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogLangService } from './catalog-lang.service.js';
import { CreateCatalogLangDto } from './dto/create-catalog-lang.dto.js';
import { UpdateCatalogLangDto } from './dto/update-catalog-lang.dto.js';

@Controller('catalog-lang')
export class CatalogLangController {
  constructor(private readonly catalogLangService: CatalogLangService) {}

  @Post()
  create(@Body() createCatalogLangDto: CreateCatalogLangDto) {
    return this.catalogLangService.create(createCatalogLangDto);
  }

  @Get()
  findAll() {
    return this.catalogLangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catalogLangService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatalogLangDto: UpdateCatalogLangDto) {
    return this.catalogLangService.update(+id, updateCatalogLangDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catalogLangService.remove(+id);
  }
}
