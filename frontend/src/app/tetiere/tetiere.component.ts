import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  constructor(private authService: AuthentificationService) {}

  isLoggedIn(): boolean {
    return this.authService.isConnected();
  }

  logout(): void {
    this.authService.logout();
    // Ajoutez ici toute autre logique de redirection ou de nettoyage nécessaire après la déconnexion
  }
}
