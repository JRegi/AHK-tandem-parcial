import { PreferenceService } from './preference.service.js';
import { CreatePreferenceDto } from './dto/create-preference.dto.js';
import { UpdatePreferenceDto } from './dto/update-preference.dto.js';
export declare class PreferenceController {
    private readonly preferenceService;
    constructor(preferenceService: PreferenceService);
    create(createPreferenceDto: CreatePreferenceDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePreferenceDto: UpdatePreferenceDto): string;
    remove(id: string): string;
}
