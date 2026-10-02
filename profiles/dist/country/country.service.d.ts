import { CreateCountryDto } from './dto/create-country.dto.js';
import { UpdateCountryDto } from './dto/update-country.dto.js';
import { Country } from './entities/country.entity.js';
export declare class CountryService {
    countries: Country[];
    create(createCountryDto: CreateCountryDto): Country;
    findAll(): Country[];
    findOne(id: number): Country | undefined;
    update(id: number, updateCountryDto: UpdateCountryDto): string;
    remove(id: number): string;
}
