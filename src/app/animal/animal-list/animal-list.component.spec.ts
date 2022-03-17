import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AnimalListItemComponent } from '../animal-list-item/animal-list-item.component';

import { AnimalListComponent } from './animal-list.component';

describe('AnimalListComponent', () => {
  let component: AnimalListComponent;
  let fixture: ComponentFixture<AnimalListComponent>;
  let httpCtrl: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListComponent, AnimalListItemComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    httpCtrl = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(AnimalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of animal in template', () => {
    const requestCtrl = httpCtrl.expectOne('/api/animals');
    expect(requestCtrl.request.method).toBe('GET');

    expect(component.items).toBeUndefined();

    requestCtrl.flush([
      {
        id: 1,
        name: 'Name1',
        species: 'Species1',
        comment: 'Comment1',
        email: 'Email1',
        phoneNumber: 'PhoneNumber1',
        veterinarian: 'Vet1',
      },
      {
        id: 2,
        name: 'Name2',
        species: 'Species2',
        comment: 'Comment2',
        email: 'Email2',
        phoneNumber: 'PhoneNumber2',
        veterinarian: 'Vet2',
      },
    ]);

    expect(component.items?.length).toBe(2);

    httpCtrl.verify();

    fixture.detectChanges();
    const template = fixture.nativeElement as HTMLElement;
    expect(template.querySelectorAll('li')?.length).toBe(2);
  });
});
