var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity.js';
import { CountryService } from '../country/country.service.js';
let UserService = class UserService {
    countryService;
    users = [];
    constructor(countryService) {
        this.countryService = countryService;
    }
    create(createUserDto) {
        const newUser = new User();
        newUser.id = Math.random();
        newUser.name = createUserDto.name;
        newUser.lastName = createUserDto.lastName;
        newUser.nickname = createUserDto.nickname;
        newUser.mail = createUserDto.mail;
        const country = this.countryService.findOne(createUserDto.residencyCountry);
        if (!country) {
            return new BadRequestException();
        }
        newUser.residencyCountry = country;
        this.users.push(newUser);
        return newUser;
    }
    findAll() {
        return this.users;
    }
    findOne(id) {
        const user = this.users.find((u) => u.id == id);
        return user;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [CountryService])
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map