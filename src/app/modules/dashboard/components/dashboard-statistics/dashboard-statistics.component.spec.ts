import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppCommonModule } from 'src/app/modules/common/app-common/app-common.module';
import { DashboardState } from '../../store/dashboard.state';
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
});
