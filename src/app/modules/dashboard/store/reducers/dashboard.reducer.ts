
import { ActionGetTotalApplicaints, DashboardActions } from "../actions/dashboard.actions";
import { DashboardState, initialDasboardState } from "../dashboard.state";

export function DashboardReducer(state = initialDasboardState, action: DashboardActions): DashboardState {
    switch (action.type) {
        case ActionGetTotalApplicaints.TYPE: {
            return { ...state, totalUserCount: 100 };
        }
        default: {
            return state;
        }
    }
}