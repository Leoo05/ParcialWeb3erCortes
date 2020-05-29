
import { event } from './models/event.model';
import { ActionReducerMap } from '@ngrx/store';
import { eventReducer } from './events.reducer';
import { indexReducer } from './index.reducer';
//import {filtersValid} from './filter/filter.actions';
//import {filterReducer} from './filter/filter.reducer';


export interface AppState {
  event: event[];
  index: number;
  //filter: filtersValid
}

export const appReducers: ActionReducerMap<AppState> = {
  event: eventReducer,
  index: indexReducer
  //filter: filterReducer
}