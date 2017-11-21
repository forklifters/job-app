import * as actions from '../actions/job.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import { Job } from '../models/job';

export const jobAdapter = createEntityAdapter<Job>();
// Give out objects consistent structures using entity state
// tslint:disable-next-line:no-empty-interface
export interface State extends EntityState<Job> { }
const defaultJob = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            title: 'Facebook Job',
            desc: 'Work on faces'
        }
    }
};
// ==============Getting default initial state object===========
export const initialState: State = jobAdapter.getInitialState(defaultJob);
// ============================ Reducer ========================
export function jobReducer(
    state: State = initialState,
    action: actions.JobActions
) {
    switch (action.type) {
        case actions.CREATE:
            return jobAdapter.addOne(action.job, state);
        case actions.UPDATE:
            return jobAdapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);
        case actions.DELETE:
            return jobAdapter.removeOne(action.id, state);
        default:
            return state;
    }
}

// Create default selectors for store.select
export const getJobStore = createFeatureSelector<State>('job');
export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = jobAdapter.getSelectors(getJobStore);
