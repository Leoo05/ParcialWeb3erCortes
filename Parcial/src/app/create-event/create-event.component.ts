import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AppState} from '../app.reducer';
import {FormControl, Validators} from '@angular/forms';
import * as actions from '../events.actions';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {


  InputNombre : FormControl;
  InputDescripcion:FormControl;
  InputEstado:FormControl;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

  }


  create(){
    this.store.dispatch( actions.create({Nombre:this.InputNombre.value,Descripcion:this.InputDescripcion.value,Estado:this.InputEstado.value}));    
    this.InputDescripcion.reset();
    this.InputEstado.reset();
    this.InputNombre.reset();
  }

}
