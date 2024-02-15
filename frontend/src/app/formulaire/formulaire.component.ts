import { Component} from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators  } from '@angular/forms';
import { RecapitulatifComponent } from '../recapitulatif/recapitulatif.component';

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

  showRecap = false;
  disabled = false;

  submitForm() {
    if (this.profileForm.valid) {
      this.showRecap = true;
      this.profileForm.disable();
    }
    else {
      console.log("Formulaire invalide");
    }
  }
}


