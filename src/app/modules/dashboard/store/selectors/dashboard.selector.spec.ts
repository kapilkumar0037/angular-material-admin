import { TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { ActionNull, DashboardActions } from "../actions/dashboard.actions"
import { DashboardState } from "../dashboard.state";
import { SelectorTotalApplicants } from "./dashboard.selectors";

describe('Dashboard selector', () => {
    let action: DashboardActions | ActionNull;
    let state: DashboardState = { totalUserCount: 1000 };
    let store = {
        'dashboard': state
    };

    it('SelectorTotalApplicants should return the correct part', () => {
        const res = SelectorTotalApplicants(store);
        expect(res).toEqual(1000);
    })

})