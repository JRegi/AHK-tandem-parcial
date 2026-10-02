import { User } from '../../user/entities/user.entity.js';

export class Preference {
  id: number;
  user: User;
  peopleAllowedToStartConvos: string;
  amountOfActiveSimultaneousConvosAllowed: number;
  doNotDisturb: boolean;
}
