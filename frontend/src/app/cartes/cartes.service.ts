import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Carte } from '../models/carte';
@Injectable({
  providedIn: 'root'
})
export class CartesService {
  private cartes: Carte[] = [
    {  nomTitulaire: 'Hamza', numero: '1234 5678 9012 3456', ccv: '123', dateExpiration: '2025-12-31'},
    {  nomTitulaire: 'Demian', numero: '1234 5678 9012 3456', ccv: '456', dateExpiration: '2026-12-31'},
  ];

  public getCartes() : Observable<Carte[]> {
    return of(this.cartes);
  }

  ajouterCarte(nouvelleCarte: Carte): Observable<void> {
    this.cartes.push(nouvelleCarte);
    return of(undefined);
  }
}
