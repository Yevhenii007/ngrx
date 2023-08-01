import {createReducer} from "@ngrx/store";

const initialCounter = 0;

export const counterReducer = createReducer({
  counter: initialCounter
})
