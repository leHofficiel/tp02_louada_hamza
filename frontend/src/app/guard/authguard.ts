import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthentificationService } from "../services/authentification.service";


export const AuthGuard = () => {
  const router = inject(Router);
  const authService = inject(AuthentificationService);

  if (!authService.isConnected()) {
    router.navigateByUrl('/unauthorized');
    return false;
  }
  return true;
};
