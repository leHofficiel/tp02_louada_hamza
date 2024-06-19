import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ProduitBase } from '../types/produitBase';
import { AjouterProduit, ClearPanier, SupprimerProduit } from '../actions/panierActions';

export interface PanierStateModel {
  produits: ProduitBase[];
}

@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    produits: []
  }
})
@Injectable()
export class PanierState {


  @Selector()
    static getProduitPanier(state: PanierStateModel) {
        return state.produits;
    }

    @Selector()
    static prixTotalPanier(state: PanierStateModel){
        return state.produits.reduce((total, productWrapper) => {
            return total + (productWrapper.produit.prix * productWrapper.quantite);
          }, 0);
    }

    @Selector()
    static nombreProduitDansPanier(state: PanierStateModel){
        return state.produits.length;
    }

    @Action(AjouterProduit)
    ajouterProduit(ctx: StateContext<PanierStateModel>, action: AjouterProduit) {
        const state = ctx.getState();
        const baseProduct: ProduitBase = {
            produit: action.produit,
            quantite: 1,
            id: state.produits.length + 1
        };

        ctx.patchState({
            produits: [...state.produits, baseProduct]
        });
    }

    @Action(SupprimerProduit)
    supprimerProduit(ctx: StateContext<PanierStateModel>, action: SupprimerProduit) {
        const state = ctx.getState();
        const productToRemove = state.produits.find(product => product.id === action.id)?.produit;
        ctx.patchState({
          produits: state.produits.filter(product => product.id !== action.id)
        })
    }

    @Action(ClearPanier)
    clearBasket(ctx: StateContext<PanierStateModel>){
        ctx.setState({ produits: []});
    }
}
export { AjouterProduit };