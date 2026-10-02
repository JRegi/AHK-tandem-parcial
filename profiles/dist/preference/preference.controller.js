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
import { PreferenceService } from './preference.service.js';
import { CreatePreferenceDto } from './dto/create-preference.dto.js';
import { UpdatePreferenceDto } from './dto/update-preference.dto.js';
let PreferenceController = class PreferenceController {
    preferenceService;
    constructor(preferenceService) {
        this.preferenceService = preferenceService;
    }
    create(createPreferenceDto) {
        return this.preferenceService.create(createPreferenceDto);
    }
    findAll() {
        return this.preferenceService.findAll();
    }
    findOne(id) {
        return this.preferenceService.findOne(+id);
    }
    update(id, updatePreferenceDto) {
        return this.preferenceService.update(+id, updatePreferenceDto);
    }
    remove(id) {
        return this.preferenceService.remove(+id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePreferenceDto]),
    __metadata("design:returntype", void 0)
], PreferenceController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PreferenceController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreferenceController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdatePreferenceDto]),
    __metadata("design:returntype", void 0)
], PreferenceController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PreferenceController.prototype, "remove", null);
PreferenceController = __decorate([
    Controller('preference'),
    __metadata("design:paramtypes", [PreferenceService])
], PreferenceController);
export { PreferenceController };
//# sourceMappingURL=preference.controller.js.map