export interface DashboardState {
    totalUserCount: number;
}

export const initialDasboardState: DashboardState = {
    totalUserCount: 0
};


export interface DashboardStore {
    dashboard: DashboardState;
}