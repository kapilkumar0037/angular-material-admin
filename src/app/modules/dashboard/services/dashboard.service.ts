import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ApiService } from '../../shared/services/api.service';
import { ProfileMetadata } from '../models/metadata.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private readonly service: ApiService) { }

  getTotalProfiles(): Observable<ProfileMetadata> {
    return this.service.getRequest<ProfileMetadata>('', '').pipe(map((data) => data));
  }
}
