import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetRoutingModule } from './vet-routing.module';
import { VetComponent } from './vet.component';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VetComponent,
    VetDetailsComponent,
    VetListComponent,
    VetFormComponent,
  ],
  imports: [CommonModule, VetRoutingModule, ReactiveFormsModule, SharedModule],
})
export class VetModule {}
