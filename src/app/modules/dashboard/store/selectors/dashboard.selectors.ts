import { createFeatureSelector, createSelector } from "@ngrx/store"
import { DashboardState, DashboardStore } from "../dashboard.state"

const dashboardFeature = createFeatureSelector<DashboardState>('dashboard');

export const SelectorTotalApplicants = createSelector(dashboardFeature, state => state.totalUserCount);