import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuardGuard: CanActivateFn = (route, state) => {

  let loginService:LoginService=inject(LoginService)
  return loginService.isAuthenticated();
};
