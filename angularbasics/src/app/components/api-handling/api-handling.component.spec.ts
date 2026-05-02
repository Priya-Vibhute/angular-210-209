import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHandlingComponent } from './api-handling.component';

describe('ApiHandlingComponent', () => {
  let component: ApiHandlingComponent;
  let fixture: ComponentFixture<ApiHandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiHandlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
