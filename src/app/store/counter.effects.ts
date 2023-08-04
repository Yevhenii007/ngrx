import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrementAction, incrementAction} from "./counter.actions";
import {tap} from "rxjs";

export class CounterEffects {
  public saveCount = createEffect(() => this._actions$.pipe(
    ofType(incrementAction, decrementAction),
    tap((action) => {
      console.log(action)
      localStorage.setItem('counter', action.value.toString())
    })
  // ! This effect does not dispatch a new action once it's done. So we set 'dispatch' to false (Because default is true);
  ), { dispatch: false })

  constructor(private _actions$: Actions) {}
}
