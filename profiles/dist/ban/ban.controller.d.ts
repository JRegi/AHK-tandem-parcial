import { BanService } from './ban.service.js';
import { CreateBanDto } from './dto/create-ban.dto.js';
import { UpdateBanDto } from './dto/update-ban.dto.js';
export declare class BanController {
    private readonly banService;
    constructor(banService: BanService);
    create(createBanDto: CreateBanDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBanDto: UpdateBanDto): string;
    remove(id: string): string;
}
