import { Injectable } from '@angular/core';
import { TokenService } from '../token/token-service.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string;
  private userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      console.log(`Token: ${token}`);
      const user = jwt_decode(token) as User;
      console.log(`chegou aqui`);
      this.userName = user.name;
      this.userSubject.next(user);
    }
  }

  logout() {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName() {
    return this.userName;
  }
}
