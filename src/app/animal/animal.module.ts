import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [AnimalDetailsComponent, AnimalListComponent],
  imports: [CommonModule, SharedModule],
  exports: [AnimalDetailsComponent, AnimalListComponent],
})
export class AnimalModule {}
