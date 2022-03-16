import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VetService } from '../../shared/api/vet.service';
import { Veterinarian } from '../../shared/api/veterinarian';

@Component({
  selector: 'app-vet-form',
  templateUrl: './vet-form.component.html',
  styleUrls: ['./vet-form.component.scss'],
})
export class VetFormComponent implements OnInit {
  vetForm: FormGroup;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      this.vetService.get(id).subscribe((data) => {
        this.initForm(data);
      });
    } else {
      this.initForm();
    }
  }

  onSubmit(): void {
    const formValue: Veterinarian = this.vetForm.value;

    let save$: Observable<Veterinarian | void>;
    if (formValue.id) {
      save$ = this.vetService.update(formValue);
    } else {
      save$ = this.vetService.create(formValue);
    }

    save$.subscribe(() => {
      this.router.navigate(['/veterinarians']);
    });
  }

  private initForm(data?: Veterinarian): void {
    this.vetForm = new FormGroup({
      id: new FormControl(data?.id),
      firstName: new FormControl(data?.firstName),
      lastName: new FormControl(data?.lastName),
    });
  }
}
