import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinoPlaceholderComponent } from './dino-placeholder.component';

describe('DinoPlaceholderComponent', () => {
  let component: DinoPlaceholderComponent;
  let fixture: ComponentFixture<DinoPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DinoPlaceholderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinoPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
