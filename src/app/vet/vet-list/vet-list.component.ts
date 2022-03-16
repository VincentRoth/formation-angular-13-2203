import { Component } from '@angular/core';
import { VetService } from '../../shared/api/vet.service';
import { Veterinarian } from '../../shared/api/veterinarian';
import { AbstractListComponent } from '../../shared/ui-utils/abstract-list.component';

@Component({
  selector: 'app-vet-list',
  templateUrl: './vet-list.component.html',
  styleUrls: ['./vet-list.component.scss'],
})
export class VetListComponent extends AbstractListComponent<Veterinarian> {
  constructor(vetService: VetService) {
    super(vetService);
  }
}
