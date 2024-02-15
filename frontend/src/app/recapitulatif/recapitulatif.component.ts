import { Component, Input} from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-recapitulatif',
  standalone: true,
  imports: [],
  templateUrl: './recapitulatif.component.html',
  styleUrl: './recapitulatif.component.css'
})
export class RecapitulatifComponent {
  @Input() informations! : FormGroup;
}
