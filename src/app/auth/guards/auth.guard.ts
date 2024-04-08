import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

export const authGuard: CanActivateFn = () => {
    const authService: AuthService = inject(AuthService);

    if(authService.loggedIn.value){
      return true;
    } else {
      const router: Router = inject(Router);

      router.navigate(['/login']);
      return false;
    }
};
