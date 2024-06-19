import { Produit } from "../../models/produit";

export interface ProduitBase {
    produit: Produit;
    quantite: number;
    id: number;
}