import { Test, TestingModule } from '@nestjs/testing';
import { CatalogLangService } from './catalog-lang.service.js';

describe('CatalogLangService', () => {
  let service: CatalogLangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatalogLangService],
    }).compile();

    service = module.get<CatalogLangService>(CatalogLangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
