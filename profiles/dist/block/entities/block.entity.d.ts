import { User } from '../../user/entities/user.entity.js';
export declare class Block {
    id: number;
    blockingUser: User;
    blockedUser: User;
}
