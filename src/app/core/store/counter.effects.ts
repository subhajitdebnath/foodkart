import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrementAction, incrementAction, initCount, setCounter } from "./counter.action";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()

export class CounterEffects {
    saveCount = createEffect(() => this.action$.pipe(
        ofType(incrementAction, decrementAction),
        withLatestFrom(this.store.select('counter')),
        tap(([action, counter]) => {
            console.log(action, counter);
            localStorage.setItem('counter', counter.toString());
        })
    ),
    {dispatch: false}
    );

    loadCount = createEffect(() => this.action$.pipe(
        ofType(initCount),
        switchMap(() => {
            const storedCounter = localStorage.getItem('counter');
            console.log(storedCounter)
            if(storedCounter) {
                return of(setCounter({value: +storedCounter})); // parsing string to number by '+'
            } else {
                return of(setCounter({value: 0}));
            }
        })
    ))




    constructor(
        private action$: Actions,
        private store: Store<{ counter: number }>
    ) {}
}