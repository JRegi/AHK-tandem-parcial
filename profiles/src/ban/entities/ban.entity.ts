import { User } from '../../user/entities/user.entity.js';

export class Ban {
  id: number;
  user: User;
  startDate: Date;
  endDate?: Date;
  permanent: boolean;
}
