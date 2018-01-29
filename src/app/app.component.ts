import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language/language.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data = {
    header: {
      banner: 'Thông tin liên hệ: 0904123456',
      menu: ['TRANG CHỦ',
        {
          url: 'register',
          name: 'ĐĂNG KÝ'
        }
        ,
        {
          url: 'register',
          name: 'HỎI ĐÁP'
        },
        {
          url: 'blog',
          name: 'BLOG'
        },
        {
          url: 'order',
          name: 'ĐẶT HÀNG'
        },
        {
          url: 'register',
          name: 'LIÊN HỆ'
        }]
    },
    body: {
      instruction: {
        title: 'Chúng tôi cung cấp những gì?',
        p: ['Chúng tôi cung cấp giải pháp để có được Internet trong chuyến du lịch của bạn: Dịch vụ cho thuê WiFi .',
          'Kết nối mọi lúc mọi nơi, hỗ trợ hơn 90 quốc gia trên thế giới.'],
        item: ['Internet không giới hạn', 'Kết nối nhiều thiết bị cùng lúc', 'Dễ sử dụng']
      },
      register: {
        title: 'Làm thế nào để đăng ký?',
        step: [
          { name: 'Đặt hàng online', way: 'Bấm "Đặt nhanh" để đặt hàng' },
          { name: 'Nhận thiết bị', way: 'MBF sẽ giao hàng đến địa chỉ của bạn' },
          { name: 'Sử dụng', way: 'Thoải mái truy cập internet khi di du lịch nước ngoài' },
          { name: 'Trả thiết bị', way: 'MBF sẽ đến nhận lại thiết bị tại địa chỉ của bạn' }
        ]
      }
    },
    footer: {
      link: {
        link1: 'ĐĂNG KÝ',
        link2: 'HỎI ĐÁP',
        link3: 'LIÊN HỆ',
        link4: 'NHẬN XÉT',
        link5: 'THÔNG TIN',
        link6: 'ĐỐI TÁC',
        link7: 'ĐIỀU KHOẢN & ĐIỀU KIỆN'
      },
      second: 'Thanh toán trực tuyến an toàn',
      last: 'Kết bạn với chúng tôi'
    }
  };
  subcription: Subscription;
  constructor(private _language: LanguageService) {
    this.subcription = this._language.type$.subscribe(
      data => {
        this.reloadData(this._language.getLanguage(data));
      }
    );
  }
  // tslint:disable-next-line:prefer-const
  // language = [];


  ngOnInit() {
    // this.loadLanguage();
  }

  reloadData(data) {
    this.data = data;
  }

 
}
