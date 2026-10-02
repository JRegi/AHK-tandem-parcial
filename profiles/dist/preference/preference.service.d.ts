import { CreatePreferenceDto } from './dto/create-preference.dto.js';
import { UpdatePreferenceDto } from './dto/update-preference.dto.js';
export declare class PreferenceService {
    create(createPreferenceDto: CreatePreferenceDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePreferenceDto: UpdatePreferenceDto): string;
    remove(id: number): string;
}
