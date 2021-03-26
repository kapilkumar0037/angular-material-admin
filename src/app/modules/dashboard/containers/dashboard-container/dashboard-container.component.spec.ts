import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationModule } from '@modules/common/navigation/navigation.module';
import { ChartsModule } from 'ng2-charts';

import { DashboardContainerComponent } from './dashboard-container.component';

describe('DashboardContainerComponent', () => {
  let component: DashboardContainerComponent;
  let fixture: ComponentFixture<DashboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsModule, NavigationModule],
      declarations: [DashboardContainerComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
