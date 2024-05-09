import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ProduitsServiceService } from '../produits-service.service'
@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  login: string = 'marsstin';
  password: string = 'toto';

  nom?: string = '';
  prenom?: string = '';
  cnx: boolean = false;
  error: string = '';

  public constructor(private apiService: ProduitsServiceService, private router:RouterModule) {
  }

  onSubmit(): void {

    //console.log('Email: ', this.login);
    // console.log('Name: ', this.name);
    this.apiService.loginClient(this.login, this.password).subscribe(
      (response) => {
        this.nom = response.nom;
        this.prenom = response.prenom;
        this.cnx = true;
        
        console.log('Login response: ', response);
         //this.router.('/catalogue');
    },
    (error) => {
      this.error = "Erreur de connexion ! Veuillez vérifier vos identifiants. Essayez login: derya et mdp: derya !"
      console.log('Login error: ', error);
    }
  );
  }
  ngOnInit(): void {
  }
}
