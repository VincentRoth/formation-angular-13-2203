import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AnimalListItemComponent } from './animal-list-item.component';

describe('AnimalListItemComponent', () => {
  let component: AnimalListItemComponent;
  let fixture: ComponentFixture<AnimalListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalListItemComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalListItemComponent);
    component = fixture.componentInstance;
    component.model = {
      id: 1,
      name: 'Name',
      species: 'Species',
      comment: 'Comment',
      email: 'Email',
      phoneNumber: 'PhoneNumber',
      veterinarian: 'Vet',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
