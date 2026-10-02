import { Country } from '../../country/entities/country.entity.js';
import { Ban } from '../../ban/entities/ban.entity.js';
import { UserLang } from '../../user-lang/entities/user-lang.entity.js';
import { Block } from '../../block/entities/block.entity.js';
export declare class User {
    id: number;
    name: string;
    lastName: string;
    nickname: string;
    mail: string;
    residencyCountry: Country;
    status: Ban[];
    learningLangs: UserLang[];
    speakingLangs: UserLang[];
    blocks: Block[];
}
