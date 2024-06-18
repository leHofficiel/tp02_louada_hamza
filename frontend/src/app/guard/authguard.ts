import { inject } from "@angular/core";
import { Router } from "@angular/router";


// export const AuthGuard = () => {
//   const router = inject(Router);
//   const authService = inject(AuthenticationService);
//   const token = authService.getToken()

//   if (!token || !authService.isTokenValid(token)) {
//     router.navigateByUrl('/error');
//     return false;
//   }
//   return true;
// };

// export const AuthGuardAdministration = () => {
//   const router = inject(Router);
//   const authService = inject(AuthenticationService);
//   const token = authService.getToken()

//   if (token && authService.isTokenValid(token)) {
//     const decodedToken : any = jwtDecode(token);
//     if (decodedToken.Role == 2) {
//       return true;
//     }
//   }
//   router.navigateByUrl('/');
//   return false;
// }
