import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[event] create event',
    props<{ Nombre: string, Descripcion: string, Estado: string, Id: number }>()
);

export const cambiar = createAction(
    '[event] cambiar event',
    props<{ Nombre: string, Descripcion: string, Estado: string, Id: number }>()
);

export const increment = createAction(
    '[index] increment index'
);