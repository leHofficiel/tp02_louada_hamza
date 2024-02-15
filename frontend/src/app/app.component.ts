import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TetiereComponent, FooterComponent, FormulaireComponent, RecapitulatifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp02_louada_hamza';
  nom : string = '';
  recap : boolean = false;

  receive($event: any){
    this.nom = $event.nom;
    this.recap = true;
  }
}
