import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SideNavTemComponent } from './side-nav-tem.component';

describe('SideNavTemComponent', () => {
  let component: SideNavTemComponent;
  let fixture: ComponentFixture<SideNavTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [SideNavTemComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTemComponent);
    component = fixture.componentInstance;
    component.sideNavItem = { text: '', link: '' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
