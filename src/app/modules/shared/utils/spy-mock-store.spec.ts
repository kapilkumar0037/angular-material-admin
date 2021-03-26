import { TestBed } from "@angular/core/testing";
import { Action, Store } from "@ngrx/store";
import { MockStore } from "@ngrx/store/testing";

export class SpyMockStore<T> {
    private readonly store: MockStore<T>;
    private readonly spy: jasmine.Spy;

    constructor() {
        this.store = TestBed.inject(Store) as MockStore<T>;
        this.spy = spyOn(this.store, 'dispatch');
    }

    setState(nextState: T): void {
        this.store.setState(nextState);
    }

    getDispatchedActions(): Action[] {
        expect(this.spy).toHaveBeenCalled();
        return this.spy.calls.allArgs().map(args => args[0]);
    }

    getDispatchedAction<R extends Action>(): Action {
        expect(this.spy).toHaveBeenCalled();
        return this.spy.calls.mostRecent().args[0] as R;
    }

    toNotHaveBeenDispatched(): void {
        expect(this.spy).not.toHaveBeenCalled();
    }
}