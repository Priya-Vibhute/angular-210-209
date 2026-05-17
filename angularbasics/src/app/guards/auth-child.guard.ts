import { CanActivateChildFn } from '@angular/router';
import { authGuardGuard } from './auth-guard.guard';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {

  
  return authGuardGuard(childRoute,state);
};
