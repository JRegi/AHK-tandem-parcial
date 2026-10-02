import { CreateBlockDto } from './dto/create-block.dto.js';
import { UpdateBlockDto } from './dto/update-block.dto.js';
export declare class BlockService {
    create(createBlockDto: CreateBlockDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBlockDto: UpdateBlockDto): string;
    remove(id: number): string;
}
