import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalevtComponent } from './modalevt.component';

describe('ModalevtComponent', () => {
  let component: ModalevtComponent;
  let fixture: ComponentFixture<ModalevtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalevtComponent]
    });
    fixture = TestBed.createComponent(ModalevtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
