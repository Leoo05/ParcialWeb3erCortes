import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListEventsComponent} from './list-events/list-events.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
