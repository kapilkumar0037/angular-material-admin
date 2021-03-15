import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private endPoint: string = environment.apiUrl;
  constructor(private readonly http: HttpClient) { }

  getRequest<T>(controller: string, method: string): Observable<T> {
    return this.http.get<T>(this.endPoint + controller + '/' + method);
  }

  postRequest<T>(controler: string, method: string): Observable<T> {
    return this.http.post<T>(this.endPoint + controler + '/' + method, '');
  }
  getRequestWithData<T>(controller: string, method: string, data: any): Observable<T> {
    return this.http.get<T>(this.endPoint + controller + '/' + method, {
      params: data,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
  postRequestWithData<T>(controller: string, method: string, data: string): Observable<T> {
    return this.http.post<T>(
      this.endPoint + controller + '/' + method,
      data,
      httpOptions
    );
  }
}
