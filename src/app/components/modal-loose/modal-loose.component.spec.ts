import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLooseComponent } from './modal-loose.component';

describe('ModalLooseComponent', () => {
  let component: ModalLooseComponent;
  let fixture: ComponentFixture<ModalLooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
