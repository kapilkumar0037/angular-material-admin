import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppCommonModule } from '../common/app-common/app-common.module';
import { DashboardStatisticsComponent } from './components/dashboard-statistics/dashboard-statistics.component';
import { CustomChartsModule } from '../common/charts/charts.module';
import { StoreModule } from '@ngrx/store';
import { DashboardReducer } from './store/reducers/dashboard.reducer';

@NgModule({
  declarations: [DashboardContainerComponent, DashboardStatisticsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    CustomChartsModule,
    StoreModule.forFeature('dashboard', DashboardReducer)
  ]
})
export class DashboardModule { }
