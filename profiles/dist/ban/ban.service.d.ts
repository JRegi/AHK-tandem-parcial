import { CreateBanDto } from './dto/create-ban.dto.js';
import { UpdateBanDto } from './dto/update-ban.dto.js';
export declare class BanService {
    create(createBanDto: CreateBanDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBanDto: UpdateBanDto): string;
    remove(id: number): string;
}
