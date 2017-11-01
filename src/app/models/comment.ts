import { User } from './user';

export class Comment {
  id: number;
  entry_id: number;
  body: string;
  created_at: string;
  owner: User;
}
