import {Action, createAction, props} from "@ngrx/store";

export const incrementAction = createAction(
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

export const decrementAction = createAction(
  '[Counter] Decrement',
  props<{value: number}>(),
)
