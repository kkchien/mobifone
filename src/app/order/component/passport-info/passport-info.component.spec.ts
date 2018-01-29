import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportInfoComponent } from './passport-info.component';

describe('PassportInfoComponent', () => {
  let component: PassportInfoComponent;
  let fixture: ComponentFixture<PassportInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
