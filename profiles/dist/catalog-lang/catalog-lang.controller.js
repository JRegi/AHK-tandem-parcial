var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatalogLangService } from './catalog-lang.service.js';
import { CreateCatalogLangDto } from './dto/create-catalog-lang.dto.js';
import { UpdateCatalogLangDto } from './dto/update-catalog-lang.dto.js';
let CatalogLangController = class CatalogLangController {
    catalogLangService;
    constructor(catalogLangService) {
        this.catalogLangService = catalogLangService;
    }
    create(createCatalogLangDto) {
        return this.catalogLangService.create(createCatalogLangDto);
    }
    findAll() {
        return this.catalogLangService.findAll();
    }
    findOne(id) {
        return this.catalogLangService.findOne(+id);
    }
    update(id, updateCatalogLangDto) {
        return this.catalogLangService.update(+id, updateCatalogLangDto);
    }
    remove(id) {
        return this.catalogLangService.remove(+id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCatalogLangDto]),
    __metadata("design:returntype", void 0)
], CatalogLangController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatalogLangController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogLangController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateCatalogLangDto]),
    __metadata("design:returntype", void 0)
], CatalogLangController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatalogLangController.prototype, "remove", null);
CatalogLangController = __decorate([
    Controller('catalog-lang'),
    __metadata("design:paramtypes", [CatalogLangService])
], CatalogLangController);
export { CatalogLangController };
//# sourceMappingURL=catalog-lang.controller.js.map