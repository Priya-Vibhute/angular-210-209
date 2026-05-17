import { CanDeactivateFn } from '@angular/router';

export interface CanExit
{
    canExit:()=>boolean;
}

export const authDeactivateGuard: CanDeactivateFn<CanExit> = (component, currentRoute, currentState, nextState) => {
  return component.canExit()
};
