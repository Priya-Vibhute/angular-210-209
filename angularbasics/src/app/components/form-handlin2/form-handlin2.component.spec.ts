import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHandlin2Component } from './form-handlin2.component';

describe('FormHandlin2Component', () => {
  let component: FormHandlin2Component;
  let fixture: ComponentFixture<FormHandlin2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHandlin2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHandlin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
