import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { Produit } from '../models/produit';
import { ProduitsServiceService } from '../produits-service.service';
import { CommonModule } from '@angular/common';
import { MoteurRechercheComponent } from '../moteur-recherche/moteur-recherche.component';
import { HttpParams } from '@angular/common/http';
import { switchMap, startWith } from 'rxjs/operators';  // Import correct des opérateurs


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

  private filterSubject = new Subject<void>();

  constructor(private produitService: ProduitsServiceService) {}

  ngOnInit() {
    this.produits = this.filterSubject.pipe(
      startWith(0),
      switchMap(() => {
        let params = new HttpParams();
        if (this.selectedGenre && this.selectedGenre !== 'Tous les genres') {
          params = params.set('genre', this.selectedGenre);
        }
        if (this.searchQuery) {
          params = params.set('query', this.searchQuery.toLowerCase());
        }
        return this.produitService.getCatalogue(params);
      })
    );
  }

  // Fonction pour récupérer les produits avec les filtres appliqués
  fetchProduits() {
    this.filterSubject.next();
  }

  // Fonction pour filtrer les produits par genre
  filterByGenre(genre: string) {
    this.selectedGenre = genre;
    this.fetchProduits();
  }

  // Fonction pour filtrer les produits par nom
  searchByName(query: string) {
    this.searchQuery = query;
    this.fetchProduits();
  }
}

