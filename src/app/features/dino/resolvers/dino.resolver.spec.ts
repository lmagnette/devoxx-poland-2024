import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dinoResolver } from './dino.resolver';

describe('dinoResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => dinoResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
