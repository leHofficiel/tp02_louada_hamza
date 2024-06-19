import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CartesService } from '../cartes.service';
import { Carte } from '../../models/carte';


@Component({
  selector: 'app-carte-from',
  templateUrl: './carte-from.component.html',
  styleUrl: './carte-from.component.css'
})
export class CarteFromComponent {

  constructor(private carteService: CartesService) { }

  cardForm = new FormGroup({
    nomTitulaire : new FormControl('',Validators.required),
    numero : new FormControl('',[Validators.required, this.numeroCarteValidator()]),
    ccv : new FormControl('',[Validators.required, this.ccvValidator()]),
    dateExpiration : new FormControl('',Validators.required),
  });

  numeroCarteValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const numeroCarte: string = control.value;
      if (!/^\d*$/.test(numeroCarte) || numeroCarte.length !== 16) {
        return { 'numeroCarteInvalid': { value: control.value } };
      }
      return null;
    };
  }
  
  ccvValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const ccv: string = control.value;
      if (!/^\d*$/.test(ccv) || ccv.length !== 3) {
        return { 'ccvInvalid': { value: control.value } };
      }
      return null;
    };
  }

  ajouterCarte() {
    const nomTitulaire = this.cardForm.get('nomTitulaire')?.value as string;
    const formData: Carte = {
      nomTitulaire: nomTitulaire,
      numero: this.cardForm.get('numero')?.value as string,
      ccv: this.cardForm.get('ccv')?.value as string,
      dateExpiration: this.cardForm.get('dateExpiration')?.value as string
    };

    this.carteService.ajouterCarte(formData);
  }

  submitForm() {
    if (this.cardForm.valid) {
      this.ajouterCarte();
    }
    else {
      console.log("Formulaire invalide");
    }
  }

  

}
