import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto.js';
import { UpdateCountryDto } from './dto/update-country.dto.js';
import { Country } from './entities/country.entity.js';

@Injectable()
export class CountryService {
  countries: Country[] = [
    new Country(1, 'Argentina', 'America'),
    new Country(2, 'Chile', 'America'),
  ];

  create(createCountryDto: CreateCountryDto) {
    const newCountry = new Country(
      Math.random(), // id
      createCountryDto.name,
      createCountryDto.region,
    );

    this.countries.push();
    return newCountry;
  }

  findAll() {
    return this.countries;
  }

  findOne(id: number) {
    const country = this.countries.find((u) => u.id == id);
    return country;
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return `This action updates a #${id} country`;
  }

  remove(id: number) {
    return `This action removes a #${id} country`;
  }
}
