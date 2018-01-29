// tslint:disable-next-line:max-line-length
import { Component, QueryList, OnInit, ViewChild, ContentChild, ViewChildren, AfterViewInit, AfterContentInit, AfterViewChecked, DoCheck } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
import { LanguageService } from '../../language/language.service';
import { PersonalInfoComponent } from '../component/personal-info/personal-info.component';
import { PassportInfoComponent } from '../component/passport-info/passport-info.component';
import { ReceiveInfoComponent } from '../component/receive-info/receive-info.component';
import { ReturnInfoComponent } from '../component/return-info/return-info.component';
import { OrderService } from '../order.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Order } from '../order';
import { DestinationInfoComponent } from '../component/destination-info/destination-info.component';
import { UtilsService } from '../../util/utils.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
// import * as  moment from 'moment';
import { Title } from '@angular/platform-browser';
import { PromotionComponent } from '../component/promotion/promotion.component';
@Component({
  selector: 'app-order-first',
  templateUrl: './order-first.component.html',
  styleUrls: ['./order-first.component.css']
})
export class OrderFirstComponent implements OnInit, AfterViewInit {



  @ViewChild(PromotionComponent) promotion: PromotionComponent;
  @ViewChild('person') personal_view: PersonalInfoComponent;
  @ViewChild(PassportInfoComponent) passport_view: PassportInfoComponent;
  // @ViewChildren(ReceiveInfoComponent) delivery: QueryList<ReceiveInfoComponent>;
  @ViewChild(DestinationInfoComponent) destination: DestinationInfoComponent;
  @ViewChild('receive') receive: ReceiveInfoComponent;
  @ViewChild('return') return: ReceiveInfoComponent;
  // @ViewChild('confirm') input: any;

  title: any;
  draft: Order;
  country = [];
  returnMethod1: any = -1;
  receiveMethod1: any = -1;
  next = false;
  errors: any;
  public myForm: FormGroup;
  constructor(private router: Router,
    private service: LanguageService,
    private _fb: FormBuilder,
    private orderService: OrderService,
    private utils: UtilsService,
    private titleService: Title
  ) {

  }

  ngOnInit() {
    this.next = false;
    this.service.type$.subscribe(
      type => {
        this.title = this.service.getTitle(type, 'app')['order']['first'];
        this.errors = this.service.getTitle(type, 'error');
        this.titleService.setTitle(this.title.title);
      }
    );
    this.country = this.service.getCountry();
    this.myForm = this._fb.group({
      device: [1, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      receiveMethod: ['1', [Validators.required]],
      returnMethod: ['1', [Validators.required]],
      term: ['', [Validators.required]]
    });

  }

  ngAfterViewInit(): void {
    // console.log(this.personal_view.dobValidate);
    // this.input.value = this.title.button;
    // $('.datepicker').datetimepicker({
    //   format: 'DD-MM-YYYY'
    // });
    // $('.datepicker').on('dp.hide', function() {
    //   // tslint:disable-next-line:prefer-const
    //   let date = $(this).datetimepicker().val();
    //   $(this).val(date);
    //   console.log($(this).val());
    // });
    setTimeout(
      () => {
        this.orderService.raw$.subscribe(
          info => {
            this.draft = info;
            if (this.draft != null && this.draft.personal && this.next == false) {
              this.personal_view.setValue(this.draft.personal);
              this.myForm.controls.device.setValue(this.draft.quantity);
              this.passport_view.setValue(this.draft.passport);
              this.destination.setValue(this.draft.destination);
              this.receive.setValue(this.draft.receive);
              this.return.setValue(this.draft.return);
            }
          }
        );
      }
    );
  }


  get destinations(): FormArray {
    // tslint:disable-next-line:prefer-const
    return this.myForm.controls.destination as FormArray;
  }


  // get device
  get device(): FormControl {
    return this.myForm.controls.device as FormControl;
  }

  get receiveMethod(): FormControl {
    return this.myForm.controls.receiveMethod as FormControl;
  }

  get returnMethod(): FormControl {
    return this.myForm.controls.returnMethod as FormControl;
  }

  // private getReturn(): ReceiveInfoComponent {
  //   return this.delivery.last as ReceiveInfoComponent;
  // }

  // private getReceive(): ReceiveInfoComponent {
  //   return this.delivery.first as ReceiveInfoComponent;
  // }


  private receiveValidate() {
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:triple-equals
    return (this.receive.validate());
  }

  private getReceiveValue() {
    return this.receive.getValue();
  }

  private returnValidate() {
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:triple-equals
    return (this.return.validate());
  }

  private getReturnValue() {
    return this.return.getValue();
  }

  private termValidate() {
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:triple-equals
    let rs = this.myForm.controls.term.value + '' == 'true' ? true : false;
    return rs;
  }

  private isValid() {
    // tslint:disable-next-line:max-line-length
    return (this.myForm.valid && this.personal_view.validate() && this.passport_view.validate() && this.destination.isValid() && this.receiveValidate() && this.returnValidate());
  }

  order() {

    if (!this.isValid()) {
      alert(this.errors.invalid);
      return;
    }

    if (this.termValidate() === false) {
      alert(this.errors['term-click']);
      return;
    }

    // tslint:disable-next-line:prefer-const
    let raw: Order = new Order(
      this.personal_view.getValue(),
      this.passport_view.getValue(),
      this.device.value,
      this.destination.rawValue,
      this.receive.rawValue,
      this.return.rawValue,
      this.promotion.rawValue
    );
    let data: Order = new Order(
      this.personal_view.getValue(),
      this.passport_view.getValue(),
      this.device.value,
      this.destination.data,
      this.getReceiveValue(),
      this.getReturnValue(),
      this.promotion.value
    );

    // tslint:disable-next-line:prefer-const


    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:prefer-const


    this.next = true;
    this.orderService.setInfo(data);
    this.orderService.setRaw(raw);
    this.router.navigate(['order/second']);


    // window.open('http://www.google.com.vn', '_blank')
    // sessionStorage.setItem("id", "abc");
  }

  test() {
    // tslint:disable-next-line:prefer-const
    let arr = [
      { first: '2017/01/01', second: '2017/01/02' },
      { first: '2017/01/05', second: '2017/01/06' },
      { first: '2017/01/03', second: '2017/01/05' },
      { first: '2017/01/06', second: '2017/01/07' },
      { first: '2017/01/08', second: '2017/01/09' }];
    console.log(this.utils.checkConflict(arr, 0, 4));
  }

  getPromotionOuput(data) {
    if (Array.isArray(data)) {
      this.country = data;
    }
  }
}
