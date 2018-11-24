export class UserReward {
  _id: string;
  user: {
    id: string,
    email: string
  }
  name: string;
  points: number;
  approved: boolean;
  pending: boolean;
}
