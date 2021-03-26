import { ActionGetTotalApplicaints, ActionNull, DashboardActions } from "../actions/dashboard.actions";
import { DashboardState, initialDasboardState } from "../dashboard.state";
import { DashboardReducer } from "./dashboard.reducer";

describe('Dashbaoard Reducer', () => {
    let action: DashboardActions;
    let store: DashboardState;
    beforeEach(() => {
        store = { totalUserCount: 1000 };
    })

    it('should return the initial state', () => {
        const res = DashboardReducer(undefined, ActionNull as any);
        expect(res).toEqual(initialDasboardState);
    })

    it('should handle ActionGetTotalApplicaints action', () => {
        action = new ActionGetTotalApplicaints();
        const res = DashboardReducer(store, action);
        expect(res.totalUserCount).toEqual(100);
    })
});