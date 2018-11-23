export class UserOpdracht {
  _id: string;
  name: string;
  points: number;
  meta: {
    date: Date,
    description: string
  };
  approved: boolean;
  pending: boolean;
}
