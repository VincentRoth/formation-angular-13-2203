import { Injectable } from '@angular/core';

export enum Right {
  ANIMAL_GET = 'ANIMAL_GET',
}

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  private rights = [Right.ANIMAL_GET];

  constructor() {}

  hasRight(right: Right): boolean {
    return this.rights.includes(right);
  }
}
