import { Produit } from "../../models/produit";

export class AjouterProduit {
    static readonly type ='[Panier] Ajouter produit';
    constructor(public produit: Produit){}


}

export class SupprimerProduit{
    static readonly type ='[Panier] Supprimer produit';
    constructor(public id : number){}
}

export class ClearPanier{
    static readonly type ='[Panier] Clear';
}