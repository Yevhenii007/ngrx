import {Actions, createEffect, ofType} from "@ngrx/effects";
import {decrementAction, incrementAction} from "./counter.actions";
import {tap, withLatestFrom} from "rxjs";
import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {selectCount} from "./counter.selectors";

@Injectable()
export class CounterEffects {
  public saveCount = createEffect(() => this._actions$.pipe(
    ofType(incrementAction, decrementAction),
    withLatestFrom(this._store.select(selectCount)),
    tap(([action, counter]) => {
      console.log(action)
      localStorage.setItem('counter', counter.toString())
    })
  // ! This effect does not dispatch a new action once it's done. So we set 'dispatch' to false (Because default is true);
  ), { dispatch: false })

  constructor(private _actions$: Actions, private _store: Store<{ counter: number }>) {}
}

// // In older ngrx versions
// import {Actions, Effect, ofType} from "@ngrx/effects";
// @Injectable()
// export class CounterEffects {
//
//   // ! This effect does not dispatch a new action once it's done. So we set 'dispatch' to false (Because default is true);
//   @Effect({ dispatch: false }) public saveCount = this._actions$.pipe(
//     ofType(incrementAction, decrementAction),
//     tap((action) => {
//       console.log(action)
//       localStorage.setItem('counter', action.value.toString())
//     })
//   )
//
//   constructor(private _actions$: Actions) {}
// }
