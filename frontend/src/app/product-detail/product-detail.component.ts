import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { ProduitsServiceService } from '../produits-service.service';
import { CommonModule } from '@angular/common';
import { AjouterProduit } from '../panier/actions/panierActions';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  produit$!: Observable<Produit>;
  productId!: number;

  constructor(private route: ActivatedRoute, private produitService: ProduitsServiceService, private store: Store) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
        this.productId = parseInt(params.get('id') ?? '0');
        this.produit$ = this.produitService.getProductById(this.productId);
    });
  }
  
  addToCart(produit: Produit) {
    this.store.dispatch(new AjouterProduit(produit));
  }
}
