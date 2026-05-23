import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authMatchGuard: CanMatchFn = (route, segments) => {

 let loginService:LoginService= inject(LoginService)
  return loginService.isAuthenticated();
};
