import { User } from '../../user/entities/user.entity.js';

export class Block {
  id: number;
  blockingUser: User;
  blockedUser: User;
}
