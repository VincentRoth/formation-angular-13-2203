import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetDetailsComponent } from './vet-details/vet-details.component';
import { VetFormComponent } from './vet-form/vet-form.component';
import { VetListComponent } from './vet-list/vet-list.component';
import { VetComponent } from './vet.component';

const routes: Routes = [
  {
    path: '',
    component: VetComponent,
    children: [
      { path: '', component: VetListComponent },
      { path: 'new', component: VetFormComponent },
      { path: 'edit/:id', component: VetFormComponent },
      { path: ':id', component: VetDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetRoutingModule {}
