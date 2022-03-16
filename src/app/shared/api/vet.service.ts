import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractCrudService } from './abstract-crud.service';
import { Veterinarian } from './veterinarian';

@Injectable({
  providedIn: 'root',
})
export class VetService extends AbstractCrudService<Veterinarian> {
  constructor(httpClient: HttpClient) {
    super(httpClient, '/api/veterinarians');
  }
}
