import { Component } from '@angular/core';
import { ProduitsServiceService } from '../produits-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomSnackbarService } from '../custom-snackbar/custom-snackbar.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  login: string = '';
  password: string = '';

  nom?: string = '';
  prenom?: string = '';
  cnx: boolean = false;
  error: string = '';

  public constructor(private authentificationService: AuthentificationService, private router:Router, private customSnackbar: CustomSnackbarService) {
  }

  onSubmit(): void {
    this.authentificationService.loginClient(this.login, this.password).subscribe(
      (response) => {
        this.nom = response.nom;
        this.prenom = response.prenom;
        this.cnx = true;
        
        this.customSnackbar.show('Connexion réussie', 'success')
        this.router.navigateByUrl('/catalogue');
    },
    (error) => {
      this.error = "Erreur de connexion ! Veuillez vérifier vos identifiants.";
      //snackbar rouge
      this.customSnackbar.show(error.error.message, 'error');
    }
  );
  }

  isConnect(): boolean {
    return this.cnx;
  }

  ngOnInit(): void {
  }
}
