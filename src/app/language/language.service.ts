import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Destination } from '../order/model/destination';
import { AppConfig } from '../app-config';

@Injectable()
export class LanguageService {

  // tslint:disable-next-line:no-inferrable-types
  language: number = 0;

  data = [{
    header: {
      banner: 'Thông tin liên hệ: 0904123456',
      menu: [
        {
          url: 'home',
          name: 'TRANG CHỦ'
        }
        ,
        {
          url: 'order',
          name: 'ĐĂNG KÝ'
        }
        ,
        {
          url: 'order',
          name: 'HƯỚNG DẪN ĐẶT HÀNG'
        }
        ,
        {
          url: 'price',
          name: 'BẢNG GIÁ'
        }
        ,
        {
          url: 'faq',
          name: 'HỎI ĐÁP'
        },
        {
          url: 'blog',
          name: 'BLOG'
        },
        {
          url: 'account',
          name: 'TÀI KHOẢN'
        },
        {
          url: 'contact',
          name: 'LIÊN HỆ'
        }]
    },
    body: {
      home: {
        title: 'Trang chủ',
        instruction: {
          title: {
            simple: 'Chúng tôi cung cấp những gì?',
            strong: ''
          },
          p: ['Chúng tôi cung cấp giải pháp để có được Internet trong chuyến du lịch của bạn: Dịch vụ cho thuê WiFi .',
            'Kết nối mọi lúc mọi nơi, hỗ trợ hơn 60 quốc gia trên thế giới.'],
          item: [{
            name: 'Internet không giới hạn',
            icon: 'fa fa-wifi fa-stack-1x fa-inverse'
          },
          {
            name: 'Kết nối nhiều thiết bị cùng lúc',
            icon: 'fa fa-users fa-stack-1x fa-inverse'
          },
          {
            name: 'Dễ sử dụng',
            icon: 'fa fa-tablet fa-stack-1x fa-inverse'
          }]
        },
        register: {
          title: {
            simple: 'Làm thế nào để ',
            strong: 'đăng ký?'
          },
          step: [
            {
              name: 'Đặt hàng online',
              way: 'Bấm "Đặt nhanh" để đặt hàng',
              icon: 'fa fa-mobile fa-stack-1x fa-inverse'
            },
            {
              name: 'Nhận thiết bị',
              way: 'MBF sẽ giao hàng đến địa chỉ của bạn',
              icon: 'fa fa-handshake-o fa-stack-1x fa-inverse'
            },
            {
              name: 'Sử dụng',
              way: 'Thoải mái truy cập internet khi di du lịch nước ngoài',
              icon: 'fa fa-podcast fa-stack-1x fa-inverse'
            },
            {
              name: 'Trả thiết bị',
              way: 'MBF sẽ đến nhận lại thiết bị tại địa chỉ của bạn',
              icon: 'fa fa-reply fa-stack-1x fa-inverse'
            }
          ],
          order: 'Đặt hàng ngay'
        },
        about: {
          title: 'Mobifone wifi là gì?'
        },
        price: {
          title: 'Bảng giá',
          personal: {
            title: 'Khách hàng cá nhân',
            thead: {
              price: 'Giá hàng ngày',
              location: 'Phạm vi cung cấp'
            }
          },
          company: {
            title: 'Khách hàng doanh nghiệp',
            thead: {
              package: {
                label: 'Gói',
                name: 'Doanh nghiệp'
              },
              price: 'Giá',
              period: 'Thời hạn',
              use: 'Số ngày sử dụng'
            }
          },
          unit: {
            day: 'ngày',
            month: 'tháng'
          }
        }
      },
      price_table: {
        title: 'Bảng giá',
        topic: 'Biểu giá cho thuê wifi du lịch',
        price_label: 'Giá'
      },
      order: {
        title: 'Đăng ký',
        error: 'Giá trị không hợp lệ. Vui lòng kiểm tra lại',
        requirement: 'DẤU * LÀ THÔNG TIN BẮT BUỘC NHẬP',
        personal: {
          title: 'THÔNG TIN CÁ NHÂN',
          firstname: 'Họ',
          lastname: 'Tên',
          dob: 'Ngày sinh',
          email: 'Địa chỉ email',
          emailConfirm: 'Địa chỉ',
          phone: 'Số di động',
          error: 'Giá trị không hợp lệ.',
          date: {
            day: 'Ngày',
            month: 'Tháng',
            year: 'Năm'
          },
        },
        passport: {
          title: 'THÔNG TIN HỘ CHIẾU(CMND)',
          no: 'Số CMND/Hộ chiếu',
          place: 'Nơi cấp',
          date: 'Ngày cấp',
          error: 'Giá trị không hợp lệ.',
          date_combo: {
            day: 'Ngày',
            month: 'Tháng',
            year: 'Năm'
          },
        },
        destination: {
          title: 'THÔNG TIN NƠI ĐẾN',
          location: 'Nơi đến',
          flight_num: 'Chuyến bay số',
          schedule: 'Lịch bay',
          start: 'Ngày bắt đầu thuê',
          end: 'Ngày kết thúc thuê',
          protection: {
            title: 'Phí bảo vệ',
            yes: 'Cần',
            no: 'Không cần'
          },
          add: 'Thêm địa chỉ',
          remove: 'Xóa'
        },
        device: {
          title: 'THÔNG TIN THIẾT BỊ',
          quantity: 'Số lượng'
        },
        delivery: {
          title: 'GIAO HÀNG VÀ TRẢ HÀNG',
          country: 'Chọn quốc gia',
          receive: {
            title: 'Phòng giao dịch',
            method: {
              airport: {
                title: 'Giao hàng tại sân bay.',
                label: 'Sân bay',
                agent: 'Đại lý',
                address: 'Địa chỉ'
              },
              city: {
                title: 'Giao hàng tại đại lý',
                label: 'Tỉnh/Thành phố',
                agent: 'Đại lý',
                address: 'Địa chỉ'
              }
            }
          },
          return: {
            title: 'Địa điểm trả hàng',
            method: {
              airport: {
                title: 'Trả thiết bị tại sân bay',
                label: 'Sân bay',
                agent: 'Đại lý',
                address: 'Địa chỉ'
              },
              city: {
                title: 'Trả thiết bị tại đại lý',
                label: 'Tỉnh/Thành phố',
                agent: 'Đại lý',
                address: 'Địa chỉ'
              }
            }
          }
        },
        term: {
          title: 'Vui lòng lưu ý các điểm sau',
          content: [
            'Khoản đặt cọc sẽ được trừ vào thẻ của bạn ngay trong ngày hoặc ngày hôm sau. '
            + 'Số tiền này sẽ được hoàn trả vào thẻ ngay khi bạn trả thiết bị.',
            'Trong trường hợp thiết bị bị mất hoặc hỏng hóc, tiền đặt cọc sẽ không được hoàn trả.',
            'Thiết bị của chúng tôi chỉ có thể sử dụng ở các quốc gia mà đã cung cấp.',
            'Không tháo thẻ SIM ra khỏi thiết bị'
          ],
          click: {
            begin: 'Tôi đồng ý với ',
            middle: 'Điều khoản & Điều Kiện',
            last: ' của website'
          }
        },
        button: 'Đặt hàng'
      },
      contact: {
        title: 'Thông tin liên hệ'
      },
      404: 'Không tồn tại trang. Vui lòng kiểm tra lại đường dẫn.'
    },
    footer: {
      link: {
        link1: {
          url: 'order',
          title: 'ĐĂNG KÝ'
        },
        link2: {
          url: 'faq',
          title: 'HỎI ĐÁP'
        },
        link3: {
          url: 'contact',
          title: 'LIÊN HỆ'
        },
        link4: {
          url: '',
          title: 'NHẬN XÉT'
        },
        link5: {
          url: '',
          title: 'THÔNG TIN'
        },
        link6: {
          url: '',
          title: 'ĐỐI TÁC'
        },
        link7: {
          url: '',
          title: 'ĐIỀU KHOẢN & ĐIỀU KIỆN'
        }
      },
      second: 'Thanh toán trực tuyến an toàn',
      last: 'Kết bạn với chúng tôi'
    }
  }, {
    header: {
      banner: 'Contact: 0904123456',
      menu: [
        {
          url: 'home',
          name: 'HOME'
        },
        {
          url: 'order',
          name: 'ORDER'
        }
        ,
        {
          url: 'order',
          name: 'ORDER GUIDE'
        }
        ,
        {
          url: 'price',
          name: 'PRICE TABLE'
        }
        ,
        {
          url: 'faq',
          name: 'FAQS'
        },
        {
          url: 'blog',
          name: 'BLOG'
        },
        {
          url: 'order',
          name: 'MY ACCOUNT'
        },
        {
          url: 'contact',
          name: 'CONTACT US'
        }]
    },
    body: {
      home: {
        title: 'Homepage',
        instruction: {
          title: {
            simple: 'What we ',
            strong: 'offer?'
          },
          p: ['We offer the solution to get Internet during your trip: Pocket Wifi rental.',
            'Stay connected anytime and anywhere over 60 countries.'],
          item: [{
            name: 'Unlimited 3G/4G Internet',
            icon: 'fa fa-wifi fa-stack-1x fa-inverse'
          },
          {
            name: 'Share with family and friends',
            icon: 'fa fa-users fa-stack-1x fa-inverse'
          },
          {
            name: 'Easy to use',
            icon: 'fa fa-tablet fa-stack-1x fa-inverse'
          }]
        },
        register: {
          title: {
            simple: 'How it ',
            strong: 'works?'
          },
          step: [
            {
              name: 'Order online',
              way: 'Order a mobile Wifi device online in 3 minutes',
              icon: 'fa fa-mobile fa-stack-1x fa-inverse'
            },
            {
              name: 'Collect',
              way: 'We ship it to your address',
              icon: 'fa fa-handshake-o fa-stack-1x fa-inverse'
            },
            {
              name: 'Enjoy',
              way: 'Discover the freedom of traveling abroad with internet access, just like at home',
              icon: 'fa fa-podcast fa-stack-1x fa-inverse'
            },
            {
              name: 'Return',
              way: 'We collect it at your place when you leave from HoChiMinh City or HaNoi City',
              icon: 'fa fa-reply fa-stack-1x fa-inverse'
            }
          ],
          order: 'Order now'
        },
        about: {
          title: 'What is Mobifone Wifi?'
        },
        price: {
          title: 'Price table',
          personal: {
            title: 'Personal Customer',
            thead: {
              price: 'Daily price',
              location: 'Scope of supply'
            }
          },
          company: {
            title: 'Business Customer',
            thead: {
              package: {
                label: 'Package',
                name: 'Business'
              },
              price: 'Price',
              period: 'Period',
              use: 'Days of use'
            }
          },
          unit: {
            day: 'days',
            month: 'months'
          }
        }
      },
      order: {
        title: 'Order',
        error: 'Invalid value. Please check again.',
        requirement: '* Required information',
        personal: {
          title: 'YOUR PERSONAL INFORMATION',
          firstname: 'Firstname',
          lastname: 'Lastname',
          dob: 'Birth',
          email: 'Email',
          emailConfirm: 'Address',
          phone: 'Phonenumber',
          error: 'Invalid value.',
          date: {
            day: 'Day',
            month: 'Month',
            year: 'Year'
          }
        },
        passport: {
          title: 'YOUR PASSPORT INFORMATION',
          no: 'No',
          place: 'Place of Issue',
          date: 'Date of Issue',
          error: 'Invalidate value.',
          date_combo: {
            day: 'Day',
            month: 'Month',
            year: 'Year'
          }
        },
        destination: {
          title: 'YOUR DESTINATION INFORMATION',
          location: 'Destination Country',
          flight_num: 'Flight No.',
          schedule: 'Arrival Datetime',
          start: 'Start date for rental',
          end: 'Return date for rental',
          protection: {
            title: 'Protection Fee',
            yes: 'Need',
            no: 'No need'
          },
          add: 'Add more',
          remove: 'Remove'
        },
        device: {
          title: 'DEVICE',
          quantity: 'Quantity'
        },
        delivery: {
          title: 'DELIVERY AND RETURN',
          country: 'Select country',
          receive: {
            title: 'Place for Collection',
            method: {
              airport: {
                title: 'Collect in airport.',
                label: 'Airport',
                agent: 'Agency',
                address: 'Address'
              },
              city: {
                title: 'Collect device(s) at domestic agency',
                label: 'Province',
                agent: 'Agency',
                address: 'Address'
              }
            }
          },
          return: {
            title: 'Place for Return',
            method: {
              airport: {
                title: 'Return at airport.',
                label: 'Airport',
                agent: 'Agency',
                address: 'Address'
              },
              city: {
                title: 'Return at domestic agency.',
                label: 'Province',
                agent: 'Agency',
                address: 'Address'
              }
            }
          }
        },
        term: {
          title: 'Kindly take note of the following',
          content: [
            'Deposit USD100 will be charged on the day or the following day to your credit card on the application form. '
            + 'It will be returned to the same credit card upon returning wifi router.',
            'Please note in case of loss or damage, deposit will not be refunded',
            'Our device can only be used in the Destination Country. Please do not use it elsewhere',
            'Please don\'t attempt to remove the SIM card from the device'
          ],
          click: {
            begin: 'I agree to the ',
            middle: 'terms and conditions',
            last: ''
          }
        },
        button: 'Order'
      },
      price_table: {
        title: 'Price table',
        topic: 'Price table for renting wifi',
        price_label: 'Price'
      },
      contact: {
        title: 'Contact us'
      },
      404: 'Page does not exist. Please check your URL.'
    },
    footer: {
      link: {
        link1: {
          url: 'order',
          title: 'ORDER'
        },
        link2: {
          url: 'faq',
          title: 'FAQS'
        },
        link3: {
          url: 'contact',
          title: 'CONTACT US'
        },
        link4: {
          url: '',
          title: 'REVIEWS'
        },
        link5: {
          url: '',
          title: 'ABOUT US'
        },
        link6: {
          url: '',
          title: 'PARTNERS'
        },
        link7: {
          url: '',
          title: 'TERMS & CONDITION'
        }
      },
      second: 'Secured online payment methods',
      last: 'FOLLOW US'
    }
  }];

  type$: Observable<number>;
  private typeSubject: Subject<number>;
  private selectSubject: Subject<number>;
  select$: Observable<number>;
  country_list = ['Chọn quốc gia', 'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola',
    'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia',
    'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain',
    'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda',
    'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil',
    'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile',
    'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire',
    'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark',
    'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
    // tslint:disable-next-line:max-line-length
    'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];

  // tslint:disable-next-line:member-ordering
  private static instance: LanguageService = null;
  api: any;
  COUNTRY_ORDER_URL: any;


  // public static getInstance(http: Http): LanguageService {
  //   if (LanguageService.instance === null) {
  //     LanguageService.instance = new LanguageService(http);
  //   }
  //   return LanguageService.instance;
  // }
  title: any;
  private divId = new Subject<any>();
   divId$: Observable<any>
  constructor(private http: Http, private _config: AppConfig) {
    console.log('CREATE NEW LANGUAGE SERVICE');
    this.typeSubject = new BehaviorSubject<number>(0);
    this.type$ = this.typeSubject.asObservable();
    this.selectSubject = new BehaviorSubject<number>(0);
    this.select$ = this.selectSubject.asObservable();
    this.title = this._config.config['language'];
    this.api = this._config.config['api'];
    this.COUNTRY_ORDER_URL = this.getAPI('order').country;
    this.divId$ = this.divId.asObservable();
  }
  setId(divId: any)
  {
    this.divId.next(divId);
  }

  // tslint:disable-next-line:semicolon
  getLanguage(type): any {
    return this.data[type];
  }

  getAPI(key: string) {
    return this.api[key];
  }

  getTitle(language: any, part: string) {
    return this.title[language][part];
  }

  getCountry(): any {
    return this.country_list;
  }


  setType(value: number) {
    this.typeSubject.next(value);
  }

  setSelect(value: number) {
    this.selectSubject.next(value);
  }

  getIp(): Observable<any> {
    return this.http.get('http://api.ipify.org/?format=jsonp&callback=JSONP_CALLBACK')
      .map((res: Response) => {
        let ipVar = res.text();
        let num = ipVar.indexOf(':');
        let num2 = ipVar.indexOf('"});');
        ipVar = ipVar.slice(num + 2, num2);
        return ipVar;
      })
      .catch((error: any) => this.handleError(error));
  }

  getCountries(): Observable<Destination[]> {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.COUNTRY_ORDER_URL, options)
      .map((res: Response) => this.extractData(res))
      .catch((error: any) => this.handleError(error));
  }
  private handleError(error: any) {
    // tslint:disable-next-line:prefer-const
    let errorMessage = (error.message) ? (error.message) : error.status ? `${error.status}-${error.statusText}` : 'Server error';
    return Observable.throw(error.json());
  }

  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res.json();
    return body || {};
  }
}


