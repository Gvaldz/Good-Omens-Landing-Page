import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonsCardComponent } from './seasons-card.component';

describe('SeasonsCardComponent', () => {
  let component: SeasonsCardComponent;
  let fixture: ComponentFixture<SeasonsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeasonsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
