import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteFromComponent } from './carte-from/carte-from.component';
import { CartesService } from './cartes.service';
import { CartesCatalogueComponent } from '../cartes-catalogue/cartes-catalogue.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CarteInfoPipe } from "./carte-info.pipe";



@NgModule({
    declarations: [CarteFromComponent, CartesCatalogueComponent],
    exports: [CarteFromComponent, CartesCatalogueComponent],
    providers: [CartesService],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        CarteInfoPipe
    ]
})
export class CartesModule { }
