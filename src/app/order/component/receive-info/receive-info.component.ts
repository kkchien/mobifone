import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../order.service';
import { LanguageService } from '../../../language/language.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'order-receive-info',
  templateUrl: './receive-info.component.html',
  styleUrls: ['./../../order-first/order-first.component.css']
})
export class ReceiveInfoComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('label')
  label: any;

  @Input('error')
  error: any;
  // tslint:disable-next-line:no-inferrable-types
  formGroup: FormGroup;
  airports = [];
  area = [];
  list_agency = [];
  agency = [];
  hasCity = false;

  provinces = [];
  errors: any;
  constructor(private _fb: FormBuilder, private orderService: OrderService, private _language: LanguageService) {
    this._language.type$.subscribe(
      type => this.errors = this._language.getTitle(type, 'error')
    );

    this.orderService.getProvinces().subscribe(
      data => this.provinces = data,
      error => console.log(error)
    );



  }

  ngOnInit() {
    this.orderService.getAirports().subscribe(
      airports => {
        this.airports = [];
        airports.forEach((element) => {
          let temp = {
            agencyId: element.agencyId,
            name: element.name,
            address: element.address
          };
          this.airports.push(temp);
        });
      },
      error => console.log(error)
    );

    this.orderService.getAreas().subscribe(
      areas => {
        areas.forEach((element) => {
          let temp = {
            area_id: element.area_id,
            area_name: element.area_name
          };
          let list_agent = {
            area_id: element.area_id,
            list: element.list_agency
          }
          this.list_agency.push(list_agent);
          this.area.push(temp);
        });
      },
      error => console.log(error)
    );
    this.startUp();
  }

  startUp() {
    this.formGroup = this._fb.group({
      city: ['', [Validators.required]],
      agent1: ['', [Validators.required]],
      airport: ['', [Validators.required]],
      agent2: ['', [Validators.required]],
      method: ['', [Validators.required]],
    });
  }

  get method() {
    return this.formGroup.controls.method.value;
  }

  get city(): FormControl {
    return this.formGroup.controls.city as FormControl;
  }

  get agent1(): FormControl {
    return this.formGroup.controls.agent1 as FormControl;
  }

  get airport(): FormControl {
    return this.formGroup.controls.airport as FormControl;
  }

  get agent2(): FormControl {
    return this.formGroup.controls.agent2 as FormControl;
  }

  get group(): FormGroup {
    return this.formGroup as FormGroup;
  }
  public validate() {
    if (this.method == '1' && this.city.valid && this.agent2.valid) {
      return true;
    }

    if (this.method == '0' && this.agent1.valid) {
      return true;
    }

    return false;
  }

  public getValue() {
    // tslint:disable-next-line:prefer-const
    let form_value = this.formGroup.value;
    // tslint:disable-next-line:prefer-const
    let value = {};
    if (this.method == 1) {
      value['type'] = 1;
      let temp = this.getAgencyDetail(form_value.city, form_value.agent2);
      let tmp = {
        agencyId: temp.agencyId,
        name_agency: temp.name,
        address: temp.address
      };
      value['agency'] = tmp;
    } else {
      value['type'] = 0;
      value['agency'] = this.getAirport(form_value.agent1);
    }
    return value;
  }

  private getAgency(id: number) {
    this.changeCity(id);
  }

  public setValue(value: any) {
    if (value.city != '') {
      this.changeCity(value.city);
    }
    this.formGroup.setValue({
      agent1: value.agent1,
      agent2: value.agent2,
      city: value.city,
      airport: value.airport,
      method: value.method
    });
  }

  changeCity(id: number) {
    this.orderService.getChildren(id).subscribe(
      data => {
        if (data.length > 0) {
          this.agency = data.filter(el => el.status == 1);
          this.hasCity = true;
        } else {
          this.hasCity = false;
        }
      },
      error => {
        console.log(error);
        this.hasCity = false;
      }
    );
  }


  public get rawValue() {
    return this.formGroup.value;
  }

  changeMethod(value: any) {
    this.formGroup.setValue({
      agent1: '',
      agent2: '',
      city: '',
      airport: '',
      method: value
    });
  }

  getAirport(id: any) {
    let data = this.airports;
    return data.filter(el => el.agencyId == id)[0];
  }

  getAgencyDetail(city: any, id: any) {
    return this.agency.filter(el => el.agencyId == id)[0];
  }


}
