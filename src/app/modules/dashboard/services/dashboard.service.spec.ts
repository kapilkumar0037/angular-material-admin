import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from '../../shared/services/api.service';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let apiServiceMock: jasmine.SpyObj<any>;
  beforeEach(() => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getRequest']);

    TestBed.configureTestingModule({
      providers: [{provide: ApiService, useValue: apiServiceMock}]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
