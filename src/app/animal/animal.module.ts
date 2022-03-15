import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalComponent } from './animal.component';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalListItemComponent,
    AnimalComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule],
})
export class AnimalModule {}
