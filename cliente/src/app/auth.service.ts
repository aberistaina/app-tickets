import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserApiResponse } from 'src/interfaces/apiData.interfaces';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private myAppUrl : string
  private myApiUrl: string
  private token: string | null = null;
  private userData: any = null;

  constructor( private http : HttpClient, private route: Router) {
    this.myAppUrl = "http://localhost:3000/"
    this.myApiUrl = "api/v1/usuarios"
    this.loadSession()

  }

  loginUser(userData: { email: string, password: string }): Observable<UserApiResponse> {
    return this.http.post<UserApiResponse>(`${this.myAppUrl}${this.myApiUrl}/login`, userData)
  }

  createUser(userData: { nombre: string, apellido: string, email: string, telefono: string, rut: string, password: string }): Observable<UserApiResponse> {
    return this.http.post<UserApiResponse>(`${this.myAppUrl}${this.myApiUrl}`, userData)
  }

 private loadSession() {
    const storedToken = localStorage.getItem('token');
    const storedUserData = localStorage.getItem('user');
    
    if (storedToken) {
      this.token = storedToken;
      this.isAuthenticatedSubject.next(true);
    }else{
      this.isAuthenticatedSubject.next(false)
    }

    if (storedUserData) {
      this.userData = JSON.parse(storedUserData);
    }
  }

  saveSession(token: string, userData: any) {
    this.token = token;
    this.userData = userData;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
    
    this.isAuthenticatedSubject.next(true);
  }

  updateUserData(user: any) {
    this.userData = user;
}

  logout() {
    this.token = null;
    this.userData = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isAuthenticatedSubject.next(false);
    this.route.navigate(["/"])
  }

  getToken(): string | null {
    return this.token;
  }


  getUserData(): any {
    return this.userData;
  }



  isAuthenticated(): boolean {
    return !!this.token;
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
