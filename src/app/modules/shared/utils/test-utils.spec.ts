import { DestroyObservable } from "./destroy.observable";

export function itShouldDestroy(destroyObservable: DestroyObservable) {
    const spyNext = spyOn(destroyObservable.destroy$, 'next');
    const spycomplete = spyOn(destroyObservable.destroy$, 'complete');

    destroyObservable.ngOnDestroy();
    expect(spyNext).toHaveBeenCalled();
    expect(spycomplete).toHaveBeenCalled();
}

export function getComponentSelector(cls: any): string {
    const list = cls.__annotations__;
    if (list && list.length) {
        return list[0].selector;
    }
    return '';
}