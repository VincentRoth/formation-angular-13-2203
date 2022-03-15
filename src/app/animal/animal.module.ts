import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalListItemComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  exports: [AnimalDetailsComponent, AnimalListComponent],
})
export class AnimalModule {}
