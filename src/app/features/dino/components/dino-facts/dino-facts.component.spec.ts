import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoFactsComponent } from './dino-facts.component';

describe('DinoFactsComponent', () => {
  let component: DinoFactsComponent;
  let fixture: ComponentFixture<DinoFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoFactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
