import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-list-item',
  templateUrl: './animal-list-item.component.html',
  styleUrls: ['./animal-list-item.component.scss'],
})
export class AnimalListItemComponent {
  @Input()
  model: Animal;
}
