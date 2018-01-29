import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationInfoComponent } from './destination-info.component';

describe('DestinationInfoComponent', () => {
  let component: DestinationInfoComponent;
  let fixture: ComponentFixture<DestinationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
