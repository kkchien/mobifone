import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationCancel } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { OrderService } from '../order.service';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../language/language.service';
@Component({
  selector: 'app-order-result',
  templateUrl: './order-result.component.html',
  styleUrls: ['./order-result.component.css']
})
export class OrderResultComponent implements OnInit {

  show = 0;
  hasData = 0;
  order: any;
  response: any;
  title: any;
  lang: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OrderService,
    private _language: LanguageService,
    private titleService: Title) {
    this.titleService.setTitle('Kết quả đăng ký');
    this._language.type$.subscribe(
      type => {
        this.lang = type;
        this.title = this._language.getTitle(type, 'app')['order']['result'];
        this.titleService.setTitle(this.title.title)
      }
    );
    this.init();
  }

  ngOnInit() {
  }

  init() {
    this.route
      .queryParams
      .subscribe(params => {
        let key = params['key'];
        let status = params['status'];
        let order_id = params['order_id'];
        if (key == undefined || status == undefined || order_id == undefined) {
          this.router.navigate(['home']);
        } else {
          this.service.getStatus(key, status).subscribe(
            data => {
              console.log(data)
              this.response = data;
            }
          );
          this.service.getOrder(order_id).subscribe(
            order => {
              this.order = order;
              this.hasData = 1;
            }
          );
        }
      });

  }
}
