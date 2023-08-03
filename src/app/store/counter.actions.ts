import {Action, createAction, props} from "@ngrx/store";

export const increment = createAction(
  '[Counter] Increment',
  props<{value: number}>()
)

export const INCREMENT_KEY = '[Counter] Increment';
export class IncrementAction implements Action {
  readonly type: string = INCREMENT_KEY;

  constructor(public value: number) {
  }
}
export type CounterActions = IncrementAction // | DecrementAction | ...
