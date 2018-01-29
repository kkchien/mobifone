import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { UtilsService } from '../../../util/utils.service';
import * as  moment from 'moment';
import * as d from 'eonasdan-bootstrap-datetimepicker';
import { LanguageService } from '../../../language/language.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./../../order-first/order-first.component.css']
})
export class PersonalInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  label: any;

  @Input('error')
  error: any;
  errors: any;


  year = [];
  month: any;
  day: any;

  formGroup: FormGroup;
  toDay: any;

  constructor(private _fb: FormBuilder, private utils: UtilsService, private _language: LanguageService) {
    this._language.type$.subscribe(
      type => {
        this.errors = this._language.getTitle(type, 'error');
      }
    );
    this.toDay = moment().format('YYYY-MM-DD');
    this.formGroup = this._fb.group({
      firstName: ['', [Validators.required, Validators.maxLength(100)]],
      lastName: ['', [Validators.required, Validators.maxLength(100)]],
      dob: [this.toDay, [Validators.required]],
      date: this._fb.group({
        year: ['', [Validators.required]],
        month: ['', [Validators.required]],
        day: ['', [Validators.required]]
      }),
      email: ['', [Validators.required, Validators.maxLength(100), Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+(\.[a-z]{2,3}){2,}')]],
      address: ['', [Validators.required, Validators.maxLength(250)]],
      phoneNumber: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]{8,15}$')]]
    });

  }

  ngOnInit() {
    // $('#dob').datetimepicker({
    //   defaultDate: new Date(),
    //   format: 'YYYY-MM-DD'
    // });
    // this.formGroup.controls.dob.setValue($('#dob').val());
    // $('#dob').on('dp.hide', () => {
    //   let date = $('#dob').val();
    //   this.formGroup.controls.dob.setValue(date);
    // });
    this.initSelect()
  }

  initSelect() {
    this.year = [];
    this.month = [];
    this.day = [];
    let now = new Date().getFullYear();
    for (let i = 0; i < 100; i++) {
      this.year.push(now - 99 + i);
      if (i < 12) {
        if (i < 9) {
          this.month.push('0' + (i + 1));
        } else {
          this.month.push(i + 1);
        }
      }
      if (i < 31) {
        if (i < 9) {
          this.day.push('0' + (i + 1));
        } else {
          this.day.push(i + 1);
        }
      }
    }
    this.year = this.year.reverse();
  }

  get date(): FormGroup {
    return this.formGroup.controls.date as FormGroup;
  }

  dateValidate() {
    let date = this.date.value;
    // if (date.month == '02') {
    //   if (date.day > 29) {
    //     return false;
    //   }
    // }
    let check = new Date(date.year, parseInt(date.month) - 1, date.day);
    if (check.getMonth() + 1 != parseInt(date.month)) {
      return false;
    }
    if (moment().diff(moment(check)) < 0) {
      return false;
    }
    return true;
  }

  // phone
  get phoneValidate(): FormControl {
    return this.formGroup.controls.phoneNumber as FormControl;
  }
  // firstname
  get firstNameValidate(): FormControl {
    return this.formGroup.controls.firstName as FormControl;
  }
  // lastname
  get lastNameValidate(): FormControl {
    return this.formGroup.controls.lastName as FormControl;
  }

  // dob
  get dobValidate(): FormControl {
    return this.formGroup.controls.dob as FormControl;
  }
  // email
  get emailValidate(): FormControl {
    return this.formGroup.controls.email as FormControl;
  }
  // confirmEmail
  public get addressValidate(): FormControl {
    return this.formGroup.controls.address as FormControl;
  }

  public validate() {
    let keys = Object.keys(this.formGroup.value);
    keys.forEach(
      key => {
        if (key != 'date') {
          let temp = this.formGroup.controls[key].value.trim();
          this.formGroup.controls[key].setValue(temp);
        }
      }
    );
    return this.formGroup.valid && this.dateValidate();
  }

  public getValue() {
    return this.formGroup.value;
  }

  public setValue(value: any) {
    this.formGroup.setValue(value);
  }

  test() {
    // tslint:disable-next-line:prefer-const
    let date = this.formGroup.controls.dob.value;
  }
}
