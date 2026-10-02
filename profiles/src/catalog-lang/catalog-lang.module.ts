import { Module } from '@nestjs/common';
import { CatalogLangService } from './catalog-lang.service.js';
import { CatalogLangController } from './catalog-lang.controller.js';

@Module({
  controllers: [CatalogLangController],
  providers: [CatalogLangService],
})
export class CatalogLangModule {}
