import {Action, createReducer, on} from "@ngrx/store";
import {
  decrementCounterAction,
  // CounterActions,
  incrementCounterAction, setCounterAction,
  // INCREMENT_KEY, IncrementAction
} from "./counter.actions";

const initialState = 0;

// ! Reducer state changing functions must always be synchronous.
export const counterReducer = createReducer(
  initialState,
  on(incrementCounterAction, (state, action) => state + action.value), // ! always should return new value, not mutated
  on(decrementCounterAction, (state, action) => state - action.value),
  on(setCounterAction, (state, action) => action.value)
)

// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT_KEY) {
//     return state + (action as IncrementAction).value;
//   }
//
//   return state
// }
