import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
{ path: 'inscription', component: FormulaireComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '', redirectTo: '/catalogue', pathMatch: 'full' }, // Redirection par défaut vers le catalogue
  { path: '**', redirectTo: '/catalogue', pathMatch: 'full' } // Redirection pour les routes inconnues vers le catalogue
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }