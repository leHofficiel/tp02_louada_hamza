import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { Produit } from './models/produit';
import { Client } from './models/client';


@Injectable({
  providedIn: 'root'
})
export class ProduitsServiceService {

  constructor(private http:HttpClient) {}
  
  public getCatalogue(params: HttpParams) : Observable<Produit[]> {
    return this.http.get<Produit[]>(environment.backendCatalogue, {params});
  }
  
  public getProductById(id: number): Observable<Produit> {
    return this.http.get<Produit>(environment.backendCatalogue + '/' + id + '/details');
  }

}
