import { CountryService } from './country.service.js';
import { CreateCountryDto } from './dto/create-country.dto.js';
import { UpdateCountryDto } from './dto/update-country.dto.js';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    create(createCountryDto: CreateCountryDto): import("./entities/country.entity.js").Country;
    findAll(): import("./entities/country.entity.js").Country[];
    findOne(id: string): import("./entities/country.entity.js").Country | undefined;
    update(id: string, updateCountryDto: UpdateCountryDto): string;
    remove(id: string): string;
}
