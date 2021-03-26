import { Component, OnInit } from '@angular/core';
import { ActionGetTotalApplicaints } from '@modules/dashboard/store/actions/dashboard.actions';
import { DashboardState } from '@modules/dashboard/store/dashboard.state';
import { SelectorTotalApplicants } from '@modules/dashboard/store/selectors/dashboard.selectors';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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
