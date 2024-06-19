import { Component} from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators  } from '@angular/forms';
import { RecapitulatifComponent } from '../recapitulatif/recapitulatif.component';
import { Client } from '../models/client';
import { AuthentificationService } from '../services/authentification.service';
import { CustomSnackbarService } from '../custom-snackbar/custom-snackbar.service';

@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [ReactiveFormsModule, RecapitulatifComponent],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {
  profileForm = new FormGroup({
    civility : new FormControl('',Validators.required),
    nom : new FormControl('',Validators.required),
    prenom : new FormControl('',Validators.required),
    adresse : new FormControl('',Validators.required),
    codePostal : new FormControl('',Validators.required),
    ville : new FormControl('',Validators.required),
    pays : new FormControl('',Validators.required),
    telephone : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    login : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
  });
  
  constructor(private authentificationService: AuthentificationService, private customSnackbar: CustomSnackbarService) {}

  showRecap = false;
  disabled = false;

  submitForm() {
    if (this.profileForm.valid) {
      const client: Client = {
        civilite: this.profileForm.value.civility!,
        nom: this.profileForm.value.nom!,
        prenom: this.profileForm.value.prenom!,
        email: this.profileForm.value.email!,
        tel: this.profileForm.value.telephone!,
        adresse: this.profileForm.value.adresse!,
        codePostal: Number(this.profileForm.value.codePostal),
        ville: this.profileForm.value.ville!,
        pays: this.profileForm.value.pays!,
        login: this.profileForm.value.login!,
        password: this.profileForm.value.password!,
      };
      console.log("holé");
      this.authentificationService.registerClient(client).subscribe({
        next: (response) => {
          console.log("Client enregistré");
          this.showRecap = true;
          this.profileForm.disable();
          this.customSnackbar.show('Client enregistré avec succès', 'success');
        },
        error: (error) => {
          if (error.status === 409) {
            // Affichez un message spécifique pour l'email déjà utilisé
            console.log("Email déjà utilisé");
            this.customSnackbar.show('Email déjà utilisé', 'error');

          } else {
            // Affichez un message générique pour d'autres erreurs
            console.log("Une erreur s'est produite lors de l'inscription");
            this.customSnackbar.show('Une erreur s\'est produite lors de l\'inscription', 'error');
          }
        }
      });

    }
    else {
      console.log("Formulaire invalide");
    }
  }
}


