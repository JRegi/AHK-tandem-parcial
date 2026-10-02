import { UserLangService } from './user-lang.service.js';
import { CreateUserLangDto } from './dto/create-user-lang.dto.js';
import { UpdateUserLangDto } from './dto/update-user-lang.dto.js';
export declare class UserLangController {
    private readonly userLangService;
    constructor(userLangService: UserLangService);
    create(createUserLangDto: CreateUserLangDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserLangDto: UpdateUserLangDto): string;
    remove(id: string): string;
}
