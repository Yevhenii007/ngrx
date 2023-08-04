import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {selectCount, selectDoubleCount} from "../store/counter.selectors";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [ AsyncPipe ],
})
export class CounterOutputComponent {
  public count$: Observable<number>;
  public doubleCount$: Observable<number>;

  constructor(private _store: Store<{ counter: number }>) {
    this.count$ = _store.select(selectCount);
    this.doubleCount$ = _store.select(selectDoubleCount);
  }
}
