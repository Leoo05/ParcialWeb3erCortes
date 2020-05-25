import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { event } from '../models/event.model';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events: event[] = [];

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(events =>{
      this.events=events;
    });
  }

}
