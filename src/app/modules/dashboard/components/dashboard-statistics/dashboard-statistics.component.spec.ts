import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCommonModule } from '@modules/common/app-common/app-common.module';
import { ActionGetTotalApplicaints } from '@modules/dashboard/store/actions/dashboard.actions';
import { DashboardState } from '@modules/dashboard/store/dashboard.state';
import { SpyMockStore } from '@modules/shared/utils/spy-mock-store.spec';
import { provideMockStore } from '@ngrx/store/testing';
import { DashboardStatisticsComponent } from './dashboard-statistics.component';

describe('DashboardStatisticsComponent', () => {
  let component: DashboardStatisticsComponent;
  let fixture: ComponentFixture<DashboardStatisticsComponent>;

  const state: DashboardState = { totalUserCount: 100 };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCommonModule],
      declarations: [DashboardStatisticsComponent],
      providers: [
        provideMockStore({ initialState: { 'dashboard': state } })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should dispatch the correct action', () => {
    let store = new SpyMockStore<DashboardState>();
    component.ngOnInit();
    const action = store.getDispatchedAction<ActionGetTotalApplicaints>();
    expect(action.type).toEqual(ActionGetTotalApplicaints.TYPE);

    component.totalApplicants$.subscribe(totalCount => {
      expect(totalCount).toEqual(100);
    })
  })
});
