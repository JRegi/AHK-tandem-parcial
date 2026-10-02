import { Ban } from '../../ban/entities/ban.entity.js';
import { UserLang } from '../../user-lang/entities/user-lang.entity.js';
import { Block } from '../../block/entities/block.entity.js';
export declare class CreateUserDto {
    name: string;
    lastName: string;
    nickname: string;
    mail: string;
    residencyCountry: number;
    status: Ban[];
    learningLangs: UserLang[];
    speakingLangs: UserLang[];
    blocks: Block[];
}
