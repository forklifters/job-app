import { Action } from '@ngrx/store';
import { Job } from '../models/job';

export const CREATE         = '[Jobs] Create';
export const UPDATE         = '[Jobs] Update';
export const DELETE         = '[Jobs] Delete';

export class Create implements Action {
    readonly type = CREATE;
    // Pass data that represents the object
    constructor(public job: Job) {}
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Job>
    ) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type JobActions =
Create |
Update |
Delete;

