import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class FakeApiService implements InMemoryDbService {

  createDb() {
    // tslint:disable-next-line:prefer-const
    let countries = [
      { 'area_id': 1, 'area_name': 'Viet Nam', 'area_short_name': 'VN', 'area_patner_id': 1, 'package_id': 1, 'price': 120000.0 },
      { 'area_id': 2, 'area_name': 'Singapore', 'area_short_name': 'SG', 'area_patner_id': 9, 'package_id': 1, 'price': 150000.0 },
      { 'area_id': 3, 'area_name': 'Japan', 'area_short_name': 'JP', 'area_patner_id': 2, 'package_id': 1, 'price': 180000.0 },
      { 'area_id': 4, 'area_name': 'Hong Kong', 'area_short_name': 'HK', 'area_patner_id': 10, 'package_id': 1, 'price': 150000.0 },
      { 'area_id': 5, 'area_name': 'Afghanistan', 'area_short_name': 'AF', 'area_patner_id': 25, 'package_id': 1, 'price': 150000.0 },
      { 'area_id': 6, 'area_name': 'Albania', 'area_short_name': 'AL', 'area_patner_id': 26, 'package_id': 1, 'price': 250000.0 },
      { 'area_id': 7, 'area_name': 'Argentina', 'area_short_name': 'AR', 'area_patner_id': 27, 'package_id': 1, 'price': 300000.0 },
      { 'area_id': 8, 'area_name': 'Armenia', 'area_short_name': 'AM', 'area_patner_id': 28, 'package_id': 1, 'price': 300000.0 },
      { 'area_id': 9, 'area_name': 'Australia', 'area_short_name': 'AU', 'area_patner_id': 29, 'package_id': 1, 'price': 250000.0 },
      { 'area_id': 10, 'area_name': 'Austria', 'area_short_name': 'AT', 'area_patner_id': 30, 'package_id': 1, 'price': 250000.0 },
      { 'area_id': 11, 'area_name': 'Azerbaijan', 'area_short_name': 'AZ', 'area_patner_id': 31, 'package_id': 1, 'price': 250000.0 },
      { 'area_id': 12, 'area_name': 'Belarus', 'area_short_name': 'BY', 'area_patner_id': 32, 'package_id': 1, 'price': 250000.0 },
      { 'area_id': 13, 'area_name': 'Belgium', 'area_short_name': 'BE', 'area_patner_id': 33, 'package_id': 1, 'price': 250000.0 }
    ];
// tslint:disable-next-line:prefer-const
    let airport = [
      {
        'agencyId': 12,
        'address': 'HN-VN',
        'type': 1,
        'description': 'Mt',
        'name': 'Sân bay quốc tế Nội Bài',
        'status': 1,
        'mbfAgency': {
            'agencyId': 1,
            'address': 'HN-VN',
            'type': 0,
            'description': 'MT',
            'name': 'Trung tâm viễn thông quốc tế ',
            'status': 1,
            'mbfAgency': null
        }
    },
    {
        'agencyId': 13,
        'address': 'Nghe An - Việt Nam',
        'type': 1,
        'description': 'MT',
        'name': 'Sân bay quốc tế Vinh',
        'status': 1,
        'mbfAgency': {
            'agencyId': 1,
            'address': 'HN-VN',
            'type': 0,
            'description': 'MT',
            'name': 'Trung tâm viễn thông quốc tế ',
            'status': 1,
            'mbfAgency': null
        }
    }
    ];
// tslint:disable-next-line:prefer-const
    let area = [
      {
        'area_id': 161,
        'area_name': 'Hà Nội',
        'area_short_name': 'HNI',
        'list_agency': [
            {
                'agency_id': 11,
                'name_agency': 'Đại lý Trung Kiên',
                'address': 'Số 406 Hồ Tùng Mậu',
                'description': 'MT'
            }
        ]
    },
    {
        'area_id': 162,
        'area_name': 'TP Hồ Chí Minh',
        'area_short_name': 'HCM',
        'list_agency': [
            {
                'agency_id': 14,
                'name_agency': 'Đại lý Trần Văn Đăng',
                'address': 'Quận 1 - HCM',
                'description': 'MT'
            }
        ]
    },
    {
        'area_id': 159,
        'area_name': 'Đà Nẵng',
        'area_short_name': 'ĐNG',
        'list_agency': []
    }
    ];
    return { countries: countries, airport: airport, area: area };
  }

}
