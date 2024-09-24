import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDivComponent } from './buttons-div.component';

describe('ButtonsDivComponent', () => {
  let component: ButtonsDivComponent;
  let fixture: ComponentFixture<ButtonsDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonsDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
