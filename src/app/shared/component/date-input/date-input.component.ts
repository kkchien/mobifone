import { Component, OnInit, AfterViewInit, Input, forwardRef, DoCheck, OnChanges, SimpleChanges, AfterContentInit, Output, EventEmitter } from '@angular/core';
import { UUID } from 'angular2-uuid';
import * as moment from 'moment';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
declare var $: any;
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateInputComponent),
      multi: true
    }
  ]
})
export class DateInputComponent implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor {





  // tslint:disable-next-line:no-input-rename
  @Input('date')
  _date: any;

  @Input('max-date')
  max: any;

  @Input('min-date')
  min: any;

  @Output('change')
  emiter = new EventEmitter();

  toDay: any;

  dateData: any;

  uuid: any;
  id: any;
  constructor() { }

  ngOnInit() {
    this.uuid = UUID.UUID();
    this.id = '#' + this.uuid;
  }

  ngAfterViewInit() {
    $(this.id).datetimepicker({
      useCurrent: false,
      format: 'YYYY-MM-DD',
      defaultDate: this.date
    });

    if (this.min != undefined) {
      $(this.id).data('DateTimePicker').minDate(moment(this.min, 'YYYY-MM-DD'))
    }

    if (this.max != undefined) {
      $(this.id).data('DateTimePicker').maxDate(moment(this.max, 'YYYY-MM-DD'))
    }
    // let tmp = moment(this.date, 'YYYY-MM-DD').toDate();
    // let init = moment(this.date, 'YYYY-MM-DD');

    $(this.id).val(this.date);

    $(this.id).on('dp.hide', e => {
      this.date = e.date.format('YYYY-MM-DD');
    });
  }

  get date() {
    return this._date;
  }

  set date(val) {
    this._date = val;
    this.emiter.emit(val);
    this.propagateChange(val);
  }

  propagateChange: any = () => { };
  ngOnChanges(inputs: SimpleChanges) {
    if (inputs['min'] != undefined) {
      this.min = inputs['min'].currentValue;
      if ($(this.id).data('DateTimePicker') != undefined) {
        $(this.id).data('DateTimePicker').minDate(moment(this.min, 'YYYY-MM-DD'));
      }
    }
  }

  writeValue(value) {
    if (value != undefined) {
      this._date = value;
      $(this.id).datetimepicker({
        defaultDate: moment(value, 'YYYY-MM-DD'),
        minDate: moment()
      });
      if ($(this.id).data('DateTimePicker') != undefined) {
        $(this.id).data('DateTimePicker').date(moment(value, 'YYYY-MM-DD'))
      }
      // console.log(moment(new Date(value)).format('YYYY-MM-DD'));
      this.date = value;
    }
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() { }


}
