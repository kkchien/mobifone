import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFirstComponent } from './order-first.component';

describe('OrderFirstComponent', () => {
  let component: OrderFirstComponent;
  let fixture: ComponentFixture<OrderFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
