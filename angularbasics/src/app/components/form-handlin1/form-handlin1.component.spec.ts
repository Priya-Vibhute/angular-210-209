import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandlin1Component } from './form-handlin1.component';

describe('FormHandlin1Component', () => {
  let component: FormHandlin1Component;
  let fixture: ComponentFixture<FormHandlin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandlin1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandlin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
