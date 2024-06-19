import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { PanierState } from './state/panierStates';
import { Observable, take } from 'rxjs';
import { ProduitBase } from './types/produitBase';
import { ClearPanier, SupprimerProduit } from './actions/panierActions';
import { CommonModule } from '@angular/common';
import { CustomSnackbarService } from '../custom-snackbar/custom-snackbar.service';


@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  @Select(PanierState.getProduitPanier) produits$!: Observable<ProduitBase[]>;
  @Select(PanierState.prixTotalPanier) prixTotal$!: Observable<number>;
  @Select(PanierState.nombreProduitDansPanier) nombreProduitDansPanier$!: Observable<number>;

  constructor(private store: Store, private customSnackbar: CustomSnackbarService) {}

  ngOnInit() {
    //Affciher le panier
    (this.produits$.subscribe(produits => console.log(produits)));
  }

  showThankYouMessage = false;

  displayThankYouMessage() {
    this.store.dispatch(new ClearPanier()).subscribe(() => {
      this.showThankYouMessage = true;
    });
  }

  removeFromCart(productId: number) {
    this.store.dispatch(new SupprimerProduit(productId));
    this.customSnackbar.show('Article supprimé du panier', 'success')
  }

  purchase() {
    this.produits$.pipe(
      take(1)
    ).subscribe(produits => {
      console.log(produits.length);
      if (produits.length === 0) {
        this.customSnackbar.show('Votre panier est vide', 'error');
      } else {
        this.store.dispatch(new ClearPanier()).subscribe(() => {
          this.customSnackbar.show('Merci pour votre achat !', 'success');
        });
      }
    });
  }
}
