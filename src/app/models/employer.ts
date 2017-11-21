import { User } from './user';
import { Job } from './job';

/**
 * Employer class, extends from User
 */
export class Employer extends User {
  jobs: Job[];
  constructor(id: number, username: string) {
    super(id, username);
  }
}
