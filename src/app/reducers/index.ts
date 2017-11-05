import { ActionReducerMap } from '@ngrx/store';
import { jobReducer } from './job.reducer';

export const reducers: ActionReducerMap<any> = {
    job: jobReducer,
};
