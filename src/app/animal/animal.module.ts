import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListItemComponent } from './animal-list-item/animal-list-item.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { AnimalComponent } from './animal.component';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AnimalDetailsComponent,
    AnimalListComponent,
    AnimalListItemComponent,
    AnimalComponent,
    AnimalFormComponent,
  ],
  imports: [CommonModule, SharedModule, AnimalRoutingModule, FormsModule],
})
export class AnimalModule {}
