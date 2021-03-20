import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActionGetTotalApplicaints } from '../../store/actions/dashboard.actions';
import { DashboardState, DashboardStore } from '../../store/dashboard.state';
import { SelectorTotalApplicants } from '../../store/selectors/dashboard.selectors';

@Component({
  selector: 'app-dashboard-statistics',
  templateUrl: './dashboard-statistics.component.html',
  styleUrls: ['./dashboard-statistics.component.scss']
})
export class DashboardStatisticsComponent implements OnInit {
  totalApplicants$!: Observable<number>;
  constructor(private readonly store: Store<DashboardState>) { }

  ngOnInit(): void {
    this.store.dispatch(new ActionGetTotalApplicaints());
    this.totalApplicants$ = this.store.pipe(select(SelectorTotalApplicants));
  }
}
