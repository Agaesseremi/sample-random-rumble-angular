import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCardCapacityComponent } from './button-card-capacity.component';

describe('ButtonCardCapacityComponent', () => {
  let component: ButtonCardCapacityComponent;
  let fixture: ComponentFixture<ButtonCardCapacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonCardCapacityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonCardCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
