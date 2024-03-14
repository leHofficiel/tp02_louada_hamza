import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartesService } from '../cartes/cartes.service';
import { Carte } from '../models/carte';

@Component({
  selector: 'app-cartes-catalogue',
  templateUrl: './cartes-catalogue.component.html',
  styleUrl: './cartes-catalogue.component.css'
})
export class CartesCatalogueComponent {
  cartes!: Observable<Carte[]>;
  constructor(private carteService: CartesService) { }
  ngOnInit() {  
    this.cartes = this.carteService.getCartes();
  }
}
