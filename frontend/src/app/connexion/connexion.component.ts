import { Component } from '@angular/core';
import { ProduitsServiceService } from '../produits-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  public constructor(private apiService: ProduitsServiceService, private router:Router) {
  }

  onSubmit(): void {
    this.apiService.loginClient(this.login, this.password).subscribe(
      (response) => {
        this.nom = response.nom;
        this.prenom = response.prenom;
        this.cnx = true;
        
        console.log('Login response: ', response);
        this.router.navigateByUrl('/catalogue');
    },
    (error) => {
      this.error = "Erreur de connexion ! Veuillez vérifier vos identifiants."
      console.log('Login error: ', error);
    }
  );
  }

  isConnect(): boolean {
    return this.cnx;
  }

  ngOnInit(): void {
  }
}
