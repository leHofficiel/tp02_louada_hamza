import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { CustomSnackbarService } from '../custom-snackbar/custom-snackbar.service';

@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  constructor(private authService: AuthentificationService, private customSnackbar: CustomSnackbarService, private router:Router) {}

  isLoggedIn(): boolean {
    return this.authService.isConnected();
  }

  logout(): void {
    this.authService.logout();
    this.customSnackbar.show('Vous avez été déconnecté', 'success');
    this.router.navigateByUrl('/connexion');
  }
}
