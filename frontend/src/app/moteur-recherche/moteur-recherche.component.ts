import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-moteur-recherche',
  standalone: true,
  imports: [],
  templateUrl: './moteur-recherche.component.html',
  styleUrl: './moteur-recherche.component.css'
})
export class MoteurRechercheComponent {
  @Output() searchQueryChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedGenreChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  searchByName(event: any) {
    const query = event.target.value.trim();
    this.searchQueryChange.emit(query);
  }

  filterByGenre(event: any) {
    const selectedGenre = event.target.value;
    console.log(selectedGenre);
    this.selectedGenreChange.emit(selectedGenre);
  }
  
}