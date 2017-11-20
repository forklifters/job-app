import { Application } from './application';
import { User } from './user';

export class Applicant extends User {
  private applications: Application[];
  constructor(id: number, username: string) {
    super(id, username);
  }
}
