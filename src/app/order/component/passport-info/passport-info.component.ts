import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from '../../../language/language.service';
import * as  moment from 'moment';
import * as d from 'eonasdan-bootstrap-datetimepicker';
// window['$'] = $;
window['jQuery'] = $;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-passport-info',
  templateUrl: './passport-info.component.html',
  styleUrls: ['./../../order-first/order-first.component.css']
})
export class PassportInfoComponent implements OnInit {

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
  country = [];
  today: any;
  constructor(private service: LanguageService, private _fb: FormBuilder) {
    this.service.type$.subscribe(
      type => this.errors = this.service.getTitle(type, 'error')
    );
    this.today = moment().format('YYYY-MM-DD');
    this.formGroup = this._fb.group({
      passportNo: ['', [Validators.required, Validators.maxLength(15), Validators.pattern('^[0-9]{8,15}$')]],
      placeIssue: ['', [Validators.required]],
      dateIssue: [this.today, [Validators.required]],
      date: this._fb.group({
        year: ['', [Validators.required]],
        month: ['', [Validators.required]],
        day: ['', [Validators.required]]
      })
    });
    this.country = service.getCountry();

  }
  ngOnInit() {
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

  getDOB() {
    let dateValue = this.formGroup.controls.date.value;
    let date = new Date(dateValue.year, parseInt(dateValue.month) - 1, dateValue.day);
  }

  // number
  get passNoValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    return this.formGroup.controls.passportNo as FormControl;
  }

  // place
  get passPlaceValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    return this.formGroup.controls.placeIssue as FormControl;
  }
  // date
  get passDateValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    return this.formGroup.controls.dateIssue as FormControl;
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

  validate() {
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

  getValue() {
    return this.formGroup.value;
  }

  setValue(value: any) {
    this.formGroup.setValue(value);
  }

  getChange(event: any) {
    console.log(event);
    console.log(this.passDateValidate)
  }

}
