import { User } from '../../user/entities/user.entity.js';
import { CatalogLang } from '../../catalog-lang/entities/catalog-lang.entity.js';
export declare class UserLang {
    id: number;
    lang: CatalogLang;
    user: User;
    level: string;
}
