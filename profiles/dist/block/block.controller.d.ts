import { BlockService } from './block.service.js';
import { CreateBlockDto } from './dto/create-block.dto.js';
import { UpdateBlockDto } from './dto/update-block.dto.js';
export declare class BlockController {
    private readonly blockService;
    constructor(blockService: BlockService);
    create(createBlockDto: CreateBlockDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBlockDto: UpdateBlockDto): string;
    remove(id: string): string;
}
