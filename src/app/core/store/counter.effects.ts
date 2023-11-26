import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { incrementAction } from "./counter.action";
import { tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()

export class CounterEffects {
    saveCount = createEffect(() => this.action$.pipe(
        ofType(incrementAction),
        withLatestFrom(this.store.select('counter')),
        tap(([action, counter]) => {
            console.log(action, counter);
            localStorage.setItem('counter', counter.toString());
        })
    ),
    {dispatch: false}
    )


    constructor(
        private action$: Actions,
        private store: Store<{ counter: number }>
    ) {}
}