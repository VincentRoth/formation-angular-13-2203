import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Right } from '../shared/auth/current-user.service';
import { RightGuard } from '../shared/auth/right.guard';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';
import { AnimalDetailsResolver } from './animal-details/animal-details.resolver';
import { AnimalFormComponent } from './animal-form/animal-form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';
import { AnimalComponent } from './animal.component';

const routes: Routes = [
  {
    path: 'animals',
    component: AnimalComponent,
    children: [
      { path: '', outlet: 'primary', component: AnimalListComponent },
      { path: 'new', component: AnimalFormComponent },
      { path: 'edit/:id', component: AnimalFormComponent },
      {
        path: ':id',
        outlet: 'primary',
        component: AnimalDetailsComponent,
        resolve: {
          animal: AnimalDetailsResolver,
        },
        canActivate: [RightGuard],
        data: {
          right: Right.ANIMAL_GET,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalRoutingModule {}
