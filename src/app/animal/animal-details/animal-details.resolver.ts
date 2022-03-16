import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Injectable({
  providedIn: 'root',
})
export class AnimalDetailsResolver implements Resolve<Animal> {
  constructor(private animalService: AnimalService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Animal> {
    const id: number = Number(route.paramMap.get('id'));
    return this.animalService.get(id);
  }
}
