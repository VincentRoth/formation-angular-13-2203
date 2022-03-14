import { Injectable } from '@angular/core';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  constructor() {}

  get(): Animal {
    return {
      name: 'Idéfix (du service)',
      species: 'dog',
      veterinarian: "Panoramix D'Armorique",
      comment: 'Développe une allergie à la potion magique.',
      email: 'test1@gmail.com',
      phoneNumber: '06.12.34.56.78',
    };
  }
}
