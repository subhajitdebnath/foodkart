import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction(
    '[counter] increment',
    props<{value: number}>()
);

export const decrementAction = createAction(
    '[counter] decrement',
);

export const setCounter = createAction(
    '[counter] set',
    props<{value: number}>()
);

export const initCount = createAction(
    '[counter] init'
);