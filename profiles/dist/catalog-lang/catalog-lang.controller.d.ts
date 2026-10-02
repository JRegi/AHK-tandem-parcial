import { CatalogLangService } from './catalog-lang.service.js';
import { CreateCatalogLangDto } from './dto/create-catalog-lang.dto.js';
import { UpdateCatalogLangDto } from './dto/update-catalog-lang.dto.js';
export declare class CatalogLangController {
    private readonly catalogLangService;
    constructor(catalogLangService: CatalogLangService);
    create(createCatalogLangDto: CreateCatalogLangDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCatalogLangDto: UpdateCatalogLangDto): string;
    remove(id: string): string;
}
