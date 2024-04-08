import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from 'src/app/auth/models/user';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment-prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();
  apiUrl: string = environment.baseUrl

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn.next(localStorage.getItem('token') ? true : false);
  }

  login(user: User): Observable<any> {

    return this.http
      .post<any>(`${this.apiUrl}/Login`, user)
      .pipe(
        map((result) => {
            if(result && result.token){
              this.loggedIn.next(true);
              localStorage.setItem(
                'token',
                result.token as string
              );
            }
          }
        )
      );
  }

  getAuthorizationToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): any {
    const decoded: any = jwtDecode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }

    return !(date.valueOf() > new Date().valueOf());
  }

  updateLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return this.loggedIn.next(false);
    } else if (this.isTokenExpired(token)) {
      return this.loggedIn.next(false);
    } else if (!localStorage.getItem('profile_id')) {
      return this.loggedIn.next(false);
    }

    return this.loggedIn.next(true);
  }

  //Logout

  logout(): void {
    let themeMode: any = localStorage.getItem('themeMode');
    localStorage.clear();
    localStorage.setItem('themeMode', themeMode);

    this.updateLoggedIn();
    this.router.navigate(['login']);
  }
}
