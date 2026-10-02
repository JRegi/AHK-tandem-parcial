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
import { BlockService } from './block.service.js';
import { CreateBlockDto } from './dto/create-block.dto.js';
import { UpdateBlockDto } from './dto/update-block.dto.js';
let BlockController = class BlockController {
    blockService;
    constructor(blockService) {
        this.blockService = blockService;
    }
    create(createBlockDto) {
        return this.blockService.create(createBlockDto);
    }
    findAll() {
        return this.blockService.findAll();
    }
    findOne(id) {
        return this.blockService.findOne(+id);
    }
    update(id, updateBlockDto) {
        return this.blockService.update(+id, updateBlockDto);
    }
    remove(id) {
        return this.blockService.remove(+id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateBlockDto]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateBlockDto]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BlockController.prototype, "remove", null);
BlockController = __decorate([
    Controller('block'),
    __metadata("design:paramtypes", [BlockService])
], BlockController);
export { BlockController };
//# sourceMappingURL=block.controller.js.map