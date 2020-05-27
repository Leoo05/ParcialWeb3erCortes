import { Action ,on, createReducer } from '@ngrx/store';
import {event} from './models/event.model';
import * as actions from './events.actions';



export const state: event[] = [
    new event('safe de word','salvemos al mundo','iniciado'),
    new event('safe de word','salvemos al mundo','iniciado'),
    new event('safe de word','salvemos al mundo','iniciado'),
    new event('safe de word','salvemos al mundo','iniciado'),
  ];
const _eventReducer = createReducer(state,
    on(actions.create,(state,{Nombre,Descripcion,Estado}) => [...state,new event(Nombre,Descripcion,Estado)]),
    );

export function eventReducer(state, action) {
    return _eventReducer(state,action);
}
