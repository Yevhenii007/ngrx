import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {increment, IncrementAction} from "../store/counter.actions";

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private _store: Store) {}

  increment() {
    // this._store.dispatch(increment({value: 1}))

    this._store.dispatch(new IncrementAction(1))
  }

  decrement() {

  }
}
