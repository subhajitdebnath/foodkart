import { createAction, props } from "@ngrx/store";

export const incrementAction = createAction(
    '[counter] increment',
    props<{value: number}>()
);