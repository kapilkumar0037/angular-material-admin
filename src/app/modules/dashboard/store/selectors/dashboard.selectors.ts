import { createFeatureSelector, createSelector } from "@ngrx/store"
import { DashboardState } from "../dashboard.state"

const dashboardFeature = createFeatureSelector<DashboardState>('dashboard');

export const SelectorTotalApplicants = createSelector(dashboardFeature, state => state.totalUserCount);