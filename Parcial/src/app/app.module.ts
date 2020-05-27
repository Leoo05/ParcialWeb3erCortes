import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { ListEventsComponent } from './list-events/list-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';

import { eventReducer } from './events.reducer';


//NGRX
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {appReducers} from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    ListEventsComponent,
    EditEventComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({event:eventReducer}),
    ReactiveFormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
