import {createAction,props} from '@ngrx/store';

export const create = createAction(
    '[event] create event',
    props<{Nombre:string,Descripcion:string,Estado:string}>()
);