import { Action, on, createReducer } from '@ngrx/store';
import { event } from './models/event.model';
import * as actions from './events.actions';
import { CompileShallowModuleMetadata } from '@angular/compiler';



export const state: event[] = [
    new event('safe de word', 'salvemos al mundo', 'iniciado', 0),
];
const _eventReducer = createReducer(state,
    on(actions.create, (state, { Nombre, Descripcion, Estado, Id }) => [...state, new event(Nombre, Descripcion, Estado, Id)]),
    on(actions.cambiar, (state, { Nombre, Descripcion, Estado, Id }) => {
        return state.map(event => {
            console.log(event);
            if (event.Id == Id) return { ...event, Nombre, Descripcion, Estado, Id };
            else return { ...event, };
        })
    }),
);

export function eventReducer(state, action) {
    return _eventReducer(state, action);
}
