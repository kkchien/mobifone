import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { OrderService } from '../../order.service';
import { Destination } from '../../model/destination';

@Component({
  selector: 'order-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  @Input('label')
  label: any;

  @Output('select')
  select: EventEmitter<Destination[]> = new EventEmitter<Destination[]>();

  form: FormGroup;
  code_entity: any;
  has_data = true;
  packages = [{
    description: 'Khách hàng lẻ',
    name: 'Mobiwifi Global',
    numberDate: 5,
    packagesId: 1,
    status: 1,
    timeout: 3,
    type: 0
  }];
  price_list: Destination[] = [];

  use_code = false;

  constructor(private _fb: FormBuilder, private _service: OrderService) {
    // this._service.getPackages(0).subscribe(
    //   data => this.packages = data,
    //   error => console.log(error)
    // );
    this.form = this._fb.group({
      code: ['', []],
      package: ['1', []]
    });
    // init default list
    this.getPrice(1);
    this.listener();
  }

  ngOnInit() {
  }

  listener() {
    this.form.controls.package.valueChanges.subscribe(
      data => {
        this.getPrice(data);
      }
    );
  }

  getPrice(type: any) {
    this._service.getPrice(type).subscribe(
      res => {
        if (res.length > 0) {
          this.price_list = res.filter(el => el.status == 1);
          // console.log(this.price_list);
        } else {
          this.price_list = []
            ;
        }
        this.select.emit(this.price_list);
      }
    );
  }

  get valid(): boolean {
    return false;
  }

  get rawValue() {
    return this.form.getRawValue();
  }

  get value() {
    let tmp = this.form.value;
    let data = {
      code: this.use_code == true ? this.code_entity.codeId : 0,
      package: tmp.package
    };
    return data;
  }

  get code(): FormControl {
    return this.form.controls.code as FormControl;
  }

  get package(): FormControl {
    return this.form.controls.package as FormControl;
  }

  checkCode() {
    this._service.getCodeDetail(this.code.value).subscribe(
      data => {
        this.code_entity = data;
        if (data.status == 1) {
          this.packages = []
          this.use_code = true;
          this.code.disable();
          data.lstMbfCodePackage.forEach(
            el => this.packages.push(el.mbfPackage)
          );
        }
      },
      error => console.log(error)
    );
    // this.has_data = false;
  }

  cancelCode() {
    this.use_code = false;
    this.code.enable();
    this.code_entity.codeId = 0;
    this.form.reset({
      code: '',
      package: '1'
    });
    this.resetPackages();

  }

  resetPackages() {
    this.packages = [{
      description: 'Khách hàng lẻ',
      name: 'Mobiwifi Global',
      numberDate: 5,
      packagesId: 1,
      status: 1,
      timeout: 3,
      type: 0
    }];
  }

}
