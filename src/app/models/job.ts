import { Employer } from './employer';
import { Application } from './application';

/**
 * The job class
 */
export class Job {
    id: string;
    title: string;
    desc: string;
    applications: Application[];
    employer: Employer;
}
