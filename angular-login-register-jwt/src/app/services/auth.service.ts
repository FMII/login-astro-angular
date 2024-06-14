import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = 'http://127.0.0.1:3333';

  constructor(private http: HttpClient) { }

  registerUser(userData: any) {
    return this.http.post(`${this.API_URL}/api/auth/register`, userData);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.API_URL}/api/auth/login`, credentials);
  }


}
