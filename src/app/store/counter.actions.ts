import {Action, createAction, on, props} from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
)

// export const INCREMENT_KEY = '[Counter] Increment';
// export class IncrementAction implements Action {
//   readonly type: string = INCREMENT_KEY;
//
//   constructor(public value: number) {
//   }
// }
// export type CounterActions = IncrementAction // | DecrementAction | ...

export const decrement = createAction(
  '[Counter] Decrement',
  props<{value: number}>(),
)
