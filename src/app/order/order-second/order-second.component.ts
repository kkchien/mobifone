import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { OrderService } from '../order.service';
import { Location } from '@angular/common';
import { Order } from '../order';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LanguageService } from '../../language/language.service';
import { Router } from '@angular/router';
import { UtilsService } from '../../util/utils.service';
import { OrderDetail } from '../model/order-detail';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-order-second',
  templateUrl: './order-second.component.html',
  styleUrls: ['./order-second.component.css']
})

export class OrderSecondComponent implements OnInit {

  @ViewChild('close01') btn: ElementRef;

  data: Order;
  order: any;
  title: any = {};
  receive: any;
  return: any;
  display: OrderDetail;
  paymentForm: FormGroup;
  payment_method;
  // tslint:disable-next-line:max-line-length
  constructor(private _location: Location,
    private router: Router,
    private service: LanguageService,
    private _fb: FormBuilder,
    private orderService: OrderService,
    private utils: UtilsService,
    private titleService: Title) {
    this.service.type$.subscribe(
      type => {
        this.title = this.service.getLanguage(type).body.order;
      }
    );

    this.orderService.info$.subscribe(
      info => {
        this.data = info;
        this.order = this.buildOrder(info);
      }
    );

    this.service.getIp().subscribe(
      data => this.order.ip_client = data
    );

    this.service.type$.subscribe(
      type => {
        this.title = this.service.getTitle(type, 'app')['order']['second'];
      }

    );

    this.titleService.setTitle('Đăng ký/ Bước 2')
  }

  ngOnInit() {
    this.payment_method = 0;
  }

  buildOrder(data: Order) {

    let temp_des = [];
    let total = 0;
    let protection_fee = 0;
    let rent_day = 0;
    let rent_fee = 0;
    for (let i = 0; i < data.destination.length; i++) {

      // tslint:disable-next-line:prefer-const
      let duration = Math.abs(this.utils.calDate(data.destination[i]['startDate'], data.destination[i]['expiredDate'])) + 1;
      // tslint:disable-next-line:prefer-const
      // tslint:disable-next-line:radix
      let fee = parseInt(data.destination[i]['location']['price']);
      // tslint:disable-next-line:prefer-const
      let temp = {
        nation_id: data.destination[i]['location']['area_id'],
        stat_date: data.destination[i]['startDate'],
        end_date: data.destination[i]['expiredDate'],
        // tslint:disable-next-line:radix
        protection_fee: parseInt(data.destination[i]['protected']),
        protect_fee: data.destination[i]['protected'] === '0' ? 0 : 50000 * duration * data.quantity,
        rent_fee: fee * duration * data.quantity,
        total_value: 0,
        driver_id: ''
      };
      rent_day += duration;
      protection_fee += temp.protect_fee;
      rent_fee += temp.rent_fee;
      total = total + temp.rent_fee + temp.protect_fee;
      temp.total_value = temp.rent_fee + temp.protect_fee;
      delete temp.rent_fee;
      delete temp.protect_fee;
      temp_des.push(temp);
    }
    this.display = new OrderDetail(rent_day, protection_fee, rent_fee, data.quantity, total);
    // tslint:disable-next-line:prefer-const
    let passport_date = data.passport.date.year + '-' + data.passport.date.month + '-' + data.passport.date.day;
    // tslint:disable-next-line:prefer-const
    let dob = data.personal.date.year + '-' + data.personal.date.month + '-' + data.personal.date.day;

    // tslint:disable-next-line:prefer-const
    let value = {
      first_name: data.personal.firstName,
      last_name: data.personal.lastName,
      phone_number: data.personal.phoneNumber,
      birthday: dob,
      email: data.personal.email,
      address: data.personal.address,
      identification: null,
      passport: data.passport.passportNo,
      passport_day: passport_date,
      passport_place: data.passport.placeIssue,
      passport_img: '#',
      quantity_driver: data.quantity,
      total_price: total,
      deposit_money: 0,
      method_pay: '0',
      ip_client: '',
      lstDestination: temp_des,
      code_id: data.promotion.code,
      packageId: data.promotion.package,
      back_url: 'http://localhost/order/result',
      lstDeliveryReturn: [
        {
          type: 1,
          category: data.return.type,
          address: '',
          hotel_name: '',
          acencyId: data.return.agency.agencyId,
          departure_time: '',
          booking_name: ''
        },
        {
          type: 0,
          category: data.receive.type,
          address: '',
          hotel_name: '',
          acencyId: data.receive.agency.agencyId,
          departure_time: '',
          booking_name: ''
        }
      ]
    };
    this.return = data.return;
    this.receive = data.receive;
    console.log(value);
    return value;
  }



  finish() {
    if (this.payment_method == 0) {
      alert('Hãy chọn phương thức thanh toán')
    } else {
      if (this.payment_method == 1) {
        this.order.deposit_money = 0;
      } else if (this.payment_method == 2) {
        this.order.deposit_money = 2000000 * this.order.quantity_driver;
      }
      this.orderService.postOrder(this.order).subscribe(
        success => {
          // this.orderService.setInfo(null);
          // if (this.payment_method == 1) {
          //   this.router.navigate(['/order/result'], { queryParams: { method: 1 } });
          // this.orderService.setConfirm(false);
          // } else {
          this.btn.nativeElement.click();
          let pay_url = success.url_pay;
          window.location.href = pay_url;
          // }
        },
        error => console.log(error)
      );
    }
  }

  show() {
    console.log(this.order);
  }

  back() {
    this._location.back();
  }
}
