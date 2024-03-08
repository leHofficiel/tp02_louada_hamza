import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Produit } from '../models/produit';
import { ProduitsServiceService } from '../produits-service.service';
import { CommonModule } from '@angular/common';
import { MoteurRechercheComponent } from '../moteur-recherche/moteur-recherche.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, MoteurRechercheComponent],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})
export class CatalogueComponent implements OnInit {
  produits!: Observable<Produit[]>;
  selectedGenre!: string; // Stocker le genre sélectionné
  searchQuery!: string; // Stocker la recherche de l'utilisateur

  constructor(private produitService : ProduitsServiceService) {}

  ngOnInit() {  
    this.produits = this.produitService.getCatalogue();
  }

  //  Fonction pour filtrer les produits par genre
  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    this.applyFilters();
  }

  // Fonction pour filtrer les produits par nom
  searchByName(query: string) {
    this.searchQuery = query;
    this.applyFilters();
  }

  // Fonction pour appliquer les filtres sur la liste de produits
  applyFilters() {
    console.log(this.selectedGenre);
    this.produits = this.produits.pipe(
      map(produits => {
        // Filtrer par genre si un genre est sélectionné
        if (this.selectedGenre && this.selectedGenre !== 'Tous les genres') {
          produits = produits.filter(produit => {
            return produit.genre?.includes(this.selectedGenre);
          });
        }
        // Filtrer par nom si une recherche est effectuée
        if (this.searchQuery) {
          produits = produits.filter(produit => {return produit.title.toLowerCase().includes(this.searchQuery);});
        }
        return produits;
      })
    );
  }
}

