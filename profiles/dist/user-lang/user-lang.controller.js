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
import { UserLangService } from './user-lang.service.js';
import { CreateUserLangDto } from './dto/create-user-lang.dto.js';
import { UpdateUserLangDto } from './dto/update-user-lang.dto.js';
let UserLangController = class UserLangController {
    userLangService;
    constructor(userLangService) {
        this.userLangService = userLangService;
    }
    create(createUserLangDto) {
        return this.userLangService.create(createUserLangDto);
    }
    findAll() {
        return this.userLangService.findAll();
    }
    findOne(id) {
        return this.userLangService.findOne(+id);
    }
    update(id, updateUserLangDto) {
        return this.userLangService.update(+id, updateUserLangDto);
    }
    remove(id) {
        return this.userLangService.remove(+id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserLangDto]),
    __metadata("design:returntype", void 0)
], UserLangController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserLangController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserLangController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateUserLangDto]),
    __metadata("design:returntype", void 0)
], UserLangController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserLangController.prototype, "remove", null);
UserLangController = __decorate([
    Controller('user-lang'),
    __metadata("design:paramtypes", [UserLangService])
], UserLangController);
export { UserLangController };
//# sourceMappingURL=user-lang.controller.js.map