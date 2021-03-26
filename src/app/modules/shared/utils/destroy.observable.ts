import { Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DestroyObservable implements OnDestroy {
    public readonly destroy$ = new Subject();

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

}