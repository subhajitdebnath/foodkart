import { createReducer, on } from "@ngrx/store";
import { decrementAction, incrementAction } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(incrementAction, (state: any, action) => state + action.value),
    on(decrementAction, state => state - 1)
);