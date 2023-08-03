import {Action, createReducer, on} from "@ngrx/store";
import {CounterActions, increment, INCREMENT_KEY, IncrementAction} from "./counter.actions";

const initialState = 0;

// export const counterReducer = createReducer(
//   initialState,
//   on(increment, (state, action) => state + action.value) // ! always should return new value, not mutated
// )

export function counterReducer(state = initialState, action: CounterActions | Action) {
  if (action.type === INCREMENT_KEY) {
    return state + (action as IncrementAction).value;
  }

  return state
}
