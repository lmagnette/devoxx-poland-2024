import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoLoadingComponent } from './dino-loading.component';

describe('DinoLoadingComponent', () => {
  let component: DinoLoadingComponent;
  let fixture: ComponentFixture<DinoLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
