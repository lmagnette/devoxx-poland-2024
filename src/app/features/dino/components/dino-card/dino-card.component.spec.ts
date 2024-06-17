import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoCardComponent } from './dino-card.component';

describe('DinoCardComponent', () => {
  let component: DinoCardComponent;
  let fixture: ComponentFixture<DinoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
