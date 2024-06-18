import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { CarteFromComponent } from './cartes/carte-from/carte-from.component';
import { CartesCatalogueComponent } from './cartes-catalogue/cartes-catalogue.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UnauthorizedComponent } from './pages/unauthorized/unauthorized.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
  { path: 'inscription', component: FormulaireComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'cartes', component: CartesCatalogueComponent },
  { path: 'nouvelle-carte', component: CarteFromComponent },
  { path: ':id/details', component: ProductDetailComponent},
  { path: 'unauthorized', component: UnauthorizedComponent},
  { path: 'panier', component: PanierComponent},
  { path: '', redirectTo: '/connexion', pathMatch: 'full' }, // Redirection par défaut vers le catalogue
  { path: '**', redirectTo: '/connexion', pathMatch: 'full' } // Redirection pour les routes inconnues vers le catalogue
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }