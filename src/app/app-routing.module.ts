import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalDetailsComponent } from './animal/animal-details/animal-details.component';
import { AnimalListComponent } from './animal/animal-list/animal-list.component';

const routes: Routes = [
  { path: '', component: AnimalListComponent },
  { path: 'animals/:id', component: AnimalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
