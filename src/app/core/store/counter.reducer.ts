import { createReducer, on } from "@ngrx/store";
import { incrementAction } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(incrementAction, (state: any) => state + 1)
);