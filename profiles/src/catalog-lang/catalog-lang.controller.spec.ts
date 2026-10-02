import { Test, TestingModule } from '@nestjs/testing';
import { CatalogLangController } from './catalog-lang.controller.js';
import { CatalogLangService } from './catalog-lang.service.js';

describe('CatalogLangController', () => {
  let controller: CatalogLangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatalogLangController],
      providers: [CatalogLangService],
    }).compile();

    controller = module.get<CatalogLangController>(CatalogLangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
