import {UserOpdracht} from './userOpdracht';
import {UserReward} from './userReward';

export class User {
  _id: string;
  email: string;
  role = 'user';
  points: number;
  tasks: UserOpdracht[];
  rewards: UserReward[];
}
