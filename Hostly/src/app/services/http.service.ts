import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  BASE_URL = isDevMode() ? 'http://34.65.143.36:3030/api/' : '/api/'
  headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer <token>',
  });

  public get(endpoint: string,) {
    return this.httpRequest(endpoint, 'get');
  }

  public post(endpoint: string, data?: any) {
    return this.httpRequest(endpoint, 'post', data);
  }

  public put(endpoint: string, data: any) {
    return this.httpRequest(endpoint, 'put', data);
  }

  public delete(endpoint: string) {
    return this.httpRequest(endpoint, 'delete');
  }

  private httpRequest(endpoint: string, method: string, data: any = null) {
    const options = method === 'delete' ? {} : { body: data };
    return this.http.request(method, `${this.BASE_URL}${endpoint}`, options);
}
}
