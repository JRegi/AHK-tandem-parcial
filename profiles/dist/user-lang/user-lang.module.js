var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { UserLangService } from './user-lang.service.js';
import { UserLangController } from './user-lang.controller.js';
let UserLangModule = class UserLangModule {
};
UserLangModule = __decorate([
    Module({
        controllers: [UserLangController],
        providers: [UserLangService],
    })
], UserLangModule);
export { UserLangModule };
//# sourceMappingURL=user-lang.module.js.map