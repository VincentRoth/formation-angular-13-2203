import { TestBed } from '@angular/core/testing';

import { AnimalDetailsResolver } from './animal-details.resolver';

describe('AnimalDetailsResolver', () => {
  let resolver: AnimalDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AnimalDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
