import { BadRequestException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { User } from './entities/user.entity.js';
import { CountryService } from '../country/country.service.js';
export declare class UserService {
    private readonly countryService;
    users: User[];
    constructor(countryService: CountryService);
    create(createUserDto: CreateUserDto): User | BadRequestException;
    findAll(): User[];
    findOne(id: number): User | undefined;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
