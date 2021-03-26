import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';
import { DashboardStatisticsComponent } from './components/dashboard-statistics/dashboard-statistics.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppCommonModule } from '@modules/common/app-common/app-common.module';
import { CustomChartsModule } from '@modules/common/charts/charts.module';
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
