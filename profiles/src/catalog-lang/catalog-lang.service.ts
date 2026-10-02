import { Injectable } from '@nestjs/common';
import { CreateCatalogLangDto } from './dto/create-catalog-lang.dto.js';
import { UpdateCatalogLangDto } from './dto/update-catalog-lang.dto.js';

@Injectable()
export class CatalogLangService {
  create(createCatalogLangDto: CreateCatalogLangDto) {
    return 'This action adds a new catalogLang';
  }

  findAll() {
    return `This action returns all catalogLang`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catalogLang`;
  }

  update(id: number, updateCatalogLangDto: UpdateCatalogLangDto) {
    return `This action updates a #${id} catalogLang`;
  }

  remove(id: number) {
    return `This action removes a #${id} catalogLang`;
  }
}
