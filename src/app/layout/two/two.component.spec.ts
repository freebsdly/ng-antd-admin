import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLayoutComponent } from './two.component';

describe('TwoLayoutComponent', () => {
  let component: TwoLayoutComponent;
  let fixture: ComponentFixture<TwoLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TwoLayoutComponent]
    });
    fixture = TestBed.createComponent(TwoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
