import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTemComponent } from './side-nav-tem.component';

describe('SideNavTemComponent', () => {
  let component: SideNavTemComponent;
  let fixture: ComponentFixture<SideNavTemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavTemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
