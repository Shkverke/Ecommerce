import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Login, LoginResponse, Register} from "../interfaces";
import {Observable, tap} from "rxjs";
import {User} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  get token() {
    return localStorage.getItem('accessToken');
  }

  get user(): User {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;  
  }


  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/login', payload)
      .pipe(
        tap((response: LoginResponse) => {
            this.setToken(response.accessToken);
            this.setUser(response.user);
          }
        ))
  }

  register(payload: Register): Observable<User> {
    return this.post<User>('auth/signup', payload)
  }

  setToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  signOut() {
    localStorage.clear();
  }
}
