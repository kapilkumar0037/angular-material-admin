
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should #getRequest make GET HTTP request', () => {
    const mock = { test: 123 };
    service.getRequest('card', 'totalRecords').subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = httpController.expectOne('card/totalRecords');
    expect(req.request.method).toEqual('GET');

    req.flush(mock);
  });

  it('should #postRequest make POST HTTP request', () => {
    const mock = { test: 123 };
    service.postRequest('card', 'totalRecords').subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = httpController.expectOne('card/totalRecords');
    expect(req.request.method).toEqual('POST');

    req.flush(mock);
  });
  it('should #getRequestWithData make GET HTTP request with data', () => {
    const mock = { test: 123 };
    service.getRequestWithData('card', 'totalRecords', {}).subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = httpController.expectOne('card/totalRecords');
    expect(req.request.method).toEqual('GET');

    req.flush(mock);
  });
  it('should #postRequestWithData make GET HTTP request', () => {
    const mock = { test: 123 };
    service.postRequestWithData('card', 'totalRecords', {}).subscribe(res => {
      expect(res).toEqual(mock);
    });

    const req = httpController.expectOne('card/totalRecords');
    expect(req.request.method).toEqual('POST');

    req.flush(mock);
  });

  afterEach(() => {
    httpController.verify();
  })
});
