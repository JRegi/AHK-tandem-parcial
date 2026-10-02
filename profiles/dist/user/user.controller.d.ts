import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): import("./entities/user.entity.js").User | import("@nestjs/common").BadRequestException;
    findAll(): import("./entities/user.entity.js").User[];
    findOne(id: string): import("./entities/user.entity.js").User | undefined;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
