import { User } from '../../user/entities/user.entity.js';
export declare class Preference {
    id: number;
    user: User;
    peopleAllowedToStartConvos: string;
    amountOfActiveSimultaneousConvosAllowed: number;
    doNotDisturb: boolean;
}
