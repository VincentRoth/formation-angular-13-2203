import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { AnimalService } from '../../shared/api/animal.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.scss'],
})
export class AnimalFormComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.animalService
        .get(Number(id))
        .subscribe((data) => (this.animal = data));
    } else {
      this.animal = {
        comment: '',
        email: '',
        name: '',
        phoneNumber: '',
        species: '',
        veterinarian: '',
      };
    }
  }

  onSubmit(): void {
    let save$: Observable<Animal | void>;

    if (this.animal.id) {
      save$ = this.animalService.update(this.animal);
    } else {
      save$ = this.animalService.create(this.animal);
    }

    save$.subscribe(() => {
      this.router.navigate(['/animals']);
    });
  }
}
