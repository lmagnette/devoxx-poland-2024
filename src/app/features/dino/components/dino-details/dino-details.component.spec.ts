import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoDetailsComponent } from './dino-details.component';

describe('DinoDetailsComponent', () => {
  let component: DinoDetailsComponent;
  let fixture: ComponentFixture<DinoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
