import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceRegisterComponent } from './place-register.component';

describe('PlaceRegisterComponent', () => {
  let component: PlaceRegisterComponent;
  let fixture: ComponentFixture<PlaceRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
