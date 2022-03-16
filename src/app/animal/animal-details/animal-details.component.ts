import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from '../../shared/api/animal';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.scss'],
})
export class AnimalDetailsComponent implements OnInit, OnDestroy {
  animal: Animal;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe(
      (data: { animal: Animal }) => {
        this.animal = data.animal;
      }
    );
  }
}
