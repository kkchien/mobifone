import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-return-info',
  templateUrl: './return-info.component.html',
  styleUrls: ['./../../order-first/order-first.component.css']
})
export class ReturnInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  label: any;
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.formGroup = this._fb.group({
      hotelAddress: ['', [Validators.required]],
      hotelName: ['', [Validators.required]],
      // bookingName: ['', [Validators.required]],
      // departureTime: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  get hotelAddress(): FormControl {
    return this.formGroup.controls.hotelAddress as FormControl;
  }

  get hotelName(): FormControl {
    return this.formGroup.controls.hotelName as FormControl;
  }

  // get bookingName(): FormControl {
  //   return this.formGroup.controls.bookingName as FormControl;
  // }

  // get departureTime(): FormControl {
  //   return this.formGroup.controls.departureTime as FormControl;
  // }

  get group(): FormGroup {
    return this.formGroup as FormGroup;
  }

  public validate() {
    return this.formGroup.valid;
  }

  public getValue() {
    return this.formGroup.value;
  }
  public setValue(value: any) {
    this.formGroup.setValue(value);
  }

}
