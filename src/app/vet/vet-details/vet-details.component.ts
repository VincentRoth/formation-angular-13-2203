import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { VetService } from '../../shared/api/vet.service';
import { Veterinarian } from '../../shared/api/veterinarian';

@Component({
  selector: 'app-vet-details',
  templateUrl: './vet-details.component.html',
  styleUrls: ['./vet-details.component.scss'],
})
export class VetDetailsComponent implements OnDestroy, OnInit {
  vet: Veterinarian;
  private subscription: Subscription;

  constructor(
    private vetService: VetService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.paramMap
      .pipe(
        map((paramMap: ParamMap): number => Number(paramMap.get('id'))),
        switchMap(
          (id: number): Observable<Veterinarian> => this.vetService.get(id)
        )
      )
      .subscribe((data: Veterinarian) => (this.vet = data));
  }
}
