import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProduitsServiceService } from '../produits-service.service';

@Component({
  selector: 'app-tetiere',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tetiere.component.html',
  styleUrl: './tetiere.component.css'
})
export class TetiereComponent {
  constructor(private apiService: ProduitsServiceService) {
  }
}
