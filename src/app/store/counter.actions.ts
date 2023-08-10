import {Action, createAction, props} from "@ngrx/store";

export const initCounterAction = createAction(
  '[Counter] Init'
)

export const setCounterAction = createAction(
  '[Counter] Set',
  props<{value: number}>()
)

export const incrementCounterAction = createAction(
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

export const decrementCounterAction = createAction(
  '[Counter] Decrement',
  props<{value: number}>(),
)
