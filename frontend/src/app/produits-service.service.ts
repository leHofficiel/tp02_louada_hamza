import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { Produit } from './models/produit';


@Injectable({
  providedIn: 'root'
})
export class ProduitsServiceService {

  constructor(private http:HttpClient) {}
  
  public getCatalogue() : Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.backendClient);
  }
}
