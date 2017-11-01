import { User } from './user';
import { Comment } from './comment';

export class Entry {
  id: number;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  owner: User;
  comments: Comment [];
}
