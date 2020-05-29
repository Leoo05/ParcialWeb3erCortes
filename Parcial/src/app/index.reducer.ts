import { Action, on, createReducer } from '@ngrx/store';
import { increment } from './events.actions';


export const state: number = 2;

const _indexReducer = createReducer(state,
    on(increment, state => state + 1),
);

export function indexReducer(state, action) {
    return _indexReducer(state, action);
}
