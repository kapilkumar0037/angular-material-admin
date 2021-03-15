import { ActionNull } from "../actions/dashboard.actions";
import { DashboardState, initialDasboardState } from "../dashboard.state";
import { DashboardReducer } from "./dashboard.reducer";

describe('Dashbaoard Reducer', () => {

    let store: DashboardState;
    beforeEach(() => {
        store = { totalUserCount: 1000 };
    })

    it('should return the initial state', () => {
        const res = DashboardReducer(undefined, ActionNull as any);
        expect(res).toEqual(initialDasboardState);
    })
});