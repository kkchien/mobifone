// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, ElementRef, ViewChild, ViewChildren, QueryList, AfterViewInit, AfterViewChecked, AfterContentInit, OnChanges, SimpleChanges, DoCheck, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { LanguageService } from '../../../language/language.service';
import { UtilsService } from '../../../util/utils.service';
import { OrderService } from '../../order.service';
import { Destination } from '../../model/destination';

import * as  moment from 'moment';
import * as d from 'eonasdan-bootstrap-datetimepicker';
import { Location } from '@angular/common';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-destination-info',
  templateUrl: './destination-info.component.html',
  styleUrls: ['./destination-info.component.css']
})
export class DestinationInfoComponent implements OnInit, AfterViewInit, AfterContentInit {



  @Input('label')
  label: any;

  @Input('error')
  error: any;

  @Input('country')
  country: Destination[] = [];
  // tslint:disable-next-line:no-output-rename
  @Output('addArray')
  arrChange = new EventEmitter();
  // tslint:disable-next-line:quotemark
  formArray: FormArray;
  formGroup: FormGroup;
  start_date: Date = new Date();
  end_date: Date = new Date();
  conflict = false;
  select_countries: Destination[] = [];

  today = moment().add(1, 'd').format('YYYY-MM-DD');

  constructor(private service: LanguageService,
    private orderService: OrderService,
    private _fb: FormBuilder,
    private utils: UtilsService) {
    this.orderService.getCountries().subscribe(
      list => {
        this.country = list;
      }
    );
    this.startUp();
    // setTimeout(
    //   () => {
    //   }
    // )

    // this.country = this.orderService.country;
    // console.log(this.country)
    // $('.datetimepicker').datetimepicker();

  }

  startUp() {
    this.formGroup = this._fb.group({
      destinations: this._fb.array([
        this._fb.group({
          location: ['', [Validators.required]],
          startDate: [this.today, [Validators.required]],
          expiredDate: [moment().add(2, 'd').format('YYYY-MM-DD'), [Validators.required]],
          protected: ['0', [Validators.required]],
        })
      ])
    });
    this.destinations.valueChanges.subscribe(
      data1 => this.listener()
    );
  }

  listener() {
    for (let i = 0; i < this.destinations.length; i++) {
      this.getStart(i).valueChanges.subscribe(
        data => {
          this.getEnd(i).setValue(moment(data, 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD'));
        }
      );
    }
  }

  ngAfterViewInit(): void {

  }

  ngAfterContentInit(): void {

  }

  changeDate(date, i, name) {
    if (name == 'startDate') {
      // tslint:disable-next-line:radix
      this.getStart(parseInt(i)).setValue(date);
    } else if (name == 'expiredDate') {
      // tslint:disable-next-line:radix
      this.getEnd(parseInt(i)).setValue(date);
    }

  }


  ngOnInit() {
    // if (this.formGroup != undefined) {
    // this.startUp()
    // }
    this.listener();
  }

  get destinations(): FormArray {
    // tslint:disable-next-line:prefer-const
    return this.formGroup.controls.destinations as FormArray;
  }

  get data() {
    let data1 = this.destinations.value;
    for (let i = 0; i < data1.length; i++) {
      data1[i].location = this.getCountry(data1[i].location)[0];
    }
    return data1;
  }

  get rawValue() {
    // let data1 = this.destinations.value;
    // console.log(this.destinations.value.length);
    // for (let i = 0; i < data1.length; i++) {
    //   data1[i].location = data1[i].location[0].area_id
    // }
    return this.destinations.value;
  }
  addDestination() {
    this.destinations.push(this.addGroup());
    this.arrChange.emit('add array');
  }

  addGroup(): FormGroup {
    return this._fb.group({
      location: ['', [Validators.required]],
      startDate: [this.today, [Validators.required]],
      expiredDate: [moment().add(2, 'd').format('YYYY-MM-DD'), [Validators.required]],
      protected: ['0', [Validators.required]],
      // flightNum: ['', [Validators.required]],
      // flightTime: ['', Validators.required]
    });
  }

  removeDestination(index: number) {
    this.destinations.removeAt(index);
  }

  getChild(id: number): FormGroup {
    return this.destinations.at(id) as FormGroup;
  }

  getLocation(index: number): FormControl {
    return this.getChild(index).controls.location as FormControl;
  }

  getStart(index: number): FormControl {
    return this.getChild(index).controls.startDate as FormControl;
  }

  getEnd(index: number): FormControl {
    return this.getChild(index).controls.expiredDate as FormControl;
  }

  getProtected(index: number): FormControl {
    return this.getChild(index).controls.protected as FormControl;
  }

  isValid() {
    return this.formGroup.valid && !this.isConflict();
  }

  check_conflict(index) {
    let now = new Date();
    let child: FormGroup = this.getChild(index);
    let start = child.controls.startDate.value;
    let end = child.controls.expiredDate.value;
    if (this.utils.calDate(start, now) > 0 || this.utils.calDate(end, now) > 0) {
      return true;
    }
    return this.utils.calDate(start, end) < 0;
  }

  isConflict() {
    let dates = [];
    for (let i = 0; i < this.destinations.length; i++) {
      let temp = {
        first: this.destinations.at(i).value.startDate,
        second: this.destinations.at(i).value.expiredDate
      }
      if (this.utils.calDate(temp.first, temp.second) < 0) {
        this.conflict = true;
        return true;
      }
      dates.push(temp)
    }
    // tslint:disable-next-line:curly
    if (dates.length == 1)
      return false;
    let rs = this.utils.checkConflict(dates, 0, dates.length - 1);
    this.conflict = rs;
    return rs;

  }

  setValue(value: Array<any>) {
    // console.log(this.destinations.length)
    // console.log(this.destinations.value.length);
    // this.select_countries = [];
    let more = value.length - this.destinations.length;
    for (let i = 0; i < more; i++) {
      this.destinations.push(this.addGroup());
    }
    value.forEach(el => {
      el.location = el.location.area_id;
    })
    this.destinations.setValue(value);
  }

  getSelect(id: any): Destination {
    return this.select_countries[id] as Destination;
  }

  dateStart(i) {
    let data = this.getStart(i).value;
    // this.getEnd(i).setValue(moment(data, 'YYYY-MM-DD').add(2, 'd').format('YYYY-MM-DD'));
    return moment(data, 'YYYY-MM-DD').add(1, 'd').format('YYYY-MM-DD');
  }


  getCountry(id: any) {
    return this.country.filter(
      el => el.area_id == id
    );
  }
}
