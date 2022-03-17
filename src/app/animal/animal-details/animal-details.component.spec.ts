import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { Animal } from '../../shared/api/animal';
import { MailToDirective } from '../../shared/mail-to.directive';
import { PhonePipe } from '../../shared/phone.pipe';

import { AnimalDetailsComponent } from './animal-details.component';

describe('AnimalDetailsComponent', () => {
  let component: AnimalDetailsComponent;
  let fixture: ComponentFixture<AnimalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalDetailsComponent, MailToDirective, PhonePipe],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              animal: {
                id: 1,
                name: 'Name',
                species: 'Species',
                comment: 'Comment',
                email: 'Email',
                phoneNumber: 'PhoneNumber',
                veterinarian: 'Vet',
              } as Animal,
            }),
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an animal of ID 1', () => {
    expect(component.animal?.id).toBe(1);
  });
});
