var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@nestjs/common';
import { Country } from './entities/country.entity.js';
let CountryService = class CountryService {
    countries = [
        new Country(1, 'Argentina', 'America'),
        new Country(2, 'Chile', 'America'),
    ];
    create(createCountryDto) {
        const newCountry = new Country(Math.random(), createCountryDto.name, createCountryDto.region);
        this.countries.push();
        return newCountry;
    }
    findAll() {
        return this.countries;
    }
    findOne(id) {
        const country = this.countries.find((u) => u.id == id);
        return country;
    }
    update(id, updateCountryDto) {
        return `This action updates a #${id} country`;
    }
    remove(id) {
        return `This action removes a #${id} country`;
    }
};
CountryService = __decorate([
    Injectable()
], CountryService);
export { CountryService };
//# sourceMappingURL=country.service.js.map