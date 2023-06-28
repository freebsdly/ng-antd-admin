import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('-->', route, state)
  switch (state.url) {
    case '/':
      return true;
    case '/home':
      return true;
    default:
      return false;
  }
};
