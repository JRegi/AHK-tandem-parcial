import { CreateUserLangDto } from './dto/create-user-lang.dto.js';
import { UpdateUserLangDto } from './dto/update-user-lang.dto.js';
export declare class UserLangService {
    create(createUserLangDto: CreateUserLangDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserLangDto: UpdateUserLangDto): string;
    remove(id: number): string;
}
