export class UserOpdracht {
  _id: string;
  user: {
    email: string,
    id: string
  };
  name: string;
  points: number;
  meta: {
    date: Date,
    description: string
  };
  approved: boolean;
  pending: boolean;
}
