import { Component } from '@angular/core';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';
import { AbstractListComponent } from '../../shared/ui-utils/abstract-list.component';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent extends AbstractListComponent<Animal> {
  constructor(animalService: AnimalService) {
    super(animalService);
  }

  override ngOnInit(): void {
    super.ngOnInit();

    // More specific logic
  }
}
