import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class AbstractCrudService<T extends { id?: number }> {
  constructor(protected httpClient: HttpClient, protected endpoint: string) {}

  get(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.endpoint}/${id}`);
  }

  getAll(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.endpoint);
  }

  create(data: T): Observable<T> {
    return this.httpClient.post<T>(this.endpoint, data);
  }

  update(data: T): Observable<void> {
    return this.httpClient.put<void>(`${this.endpoint}/${data.id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.endpoint}/${id}`);
  }
}
