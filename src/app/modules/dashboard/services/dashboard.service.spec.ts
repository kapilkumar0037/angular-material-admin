import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from '../../shared/services/api.service';
import { ProfileMetadata } from '../models/metadata.model';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;
  let apiServiceMock: jasmine.SpyObj<any>;
  beforeEach(() => {
    apiServiceMock = jasmine.createSpyObj('ApiService', ['getRequest']);

    TestBed.configureTestingModule({
      providers: [{ provide: ApiService, useValue: apiServiceMock }]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should #getTotalProfiles return total profiles', () => {
    const mock: ProfileMetadata = { type: 'All', value: '100' };
    apiServiceMock.getRequest.and.returnValue(of(mock));

    service.getTotalProfiles().subscribe(res => {
      expect(res).toEqual(mock);
    })
  })
});
