import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { FormControl, Validators } from '@angular/forms';
import * as actions from '../events.actions';
import { event } from '../models/event.model';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})

export class EditEventComponent implements OnInit {

  @Input() indice : number;
  
  InputNombre: FormControl;
  InputDescripcion: FormControl;
  InputEstado: FormControl;
  index: number;

  constructor(private store: Store<AppState>) {
    this.InputNombre = new FormControl('', Validators.required);
    this.InputDescripcion = new FormControl('', Validators.required);
    this.InputEstado = new FormControl('', Validators.required);
    
  }

  ngOnInit(): void {}

  edit() {
    let n = this.InputNombre.value;
    let d = this.InputDescripcion.value;
    let e = this.InputEstado.value;
    if(n !="" || d !="" || e !="" ){
      this.store.dispatch(actions.cambiar({ Nombre: n, Descripcion: d, Estado: e, Id: this.indice }));
      this.InputDescripcion.reset();
      this.InputEstado.reset();
      this.InputNombre.reset();
    }else{
      console.log("asdasdasdasd");
    }

  }

 

}
