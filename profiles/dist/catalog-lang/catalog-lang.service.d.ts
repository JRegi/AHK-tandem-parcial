import { CreateCatalogLangDto } from './dto/create-catalog-lang.dto.js';
import { UpdateCatalogLangDto } from './dto/update-catalog-lang.dto.js';
export declare class CatalogLangService {
    create(createCatalogLangDto: CreateCatalogLangDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCatalogLangDto: UpdateCatalogLangDto): string;
    remove(id: number): string;
}
