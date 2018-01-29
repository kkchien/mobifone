import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSecondComponent } from './order-second.component';

describe('OrderSecondComponent', () => {
  let component: OrderSecondComponent;
  let fixture: ComponentFixture<OrderSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
