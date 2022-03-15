import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor(private httpClient: HttpClient) {}

  get(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(`/api/animals/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>('/api/animals');
  }

  create(data: Animal): Observable<Animal> {
    return this.httpClient.post<Animal>('/api/animals/', data);
  }

  update(data: Animal): Observable<void> {
    return this.httpClient.put<void>(`/api/animals/${data.id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`/api/animals/${id}`);
  }
}
