import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { RecapitulatifComponent } from './recapitulatif/recapitulatif.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MoteurRechercheComponent } from './moteur-recherche/moteur-recherche.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TetiereComponent, FooterComponent, FormulaireComponent, RecapitulatifComponent, CatalogueComponent, MoteurRechercheComponent],
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
