import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class UtilsService {

  select: Subject<any>;
  select$: Observable<any>;
  headers: Headers;

  constructor(private http: Http) {
    this.select = new BehaviorSubject<any>(0);
    this.select$ = this.select.asObservable();
    this.headers = new Headers({ 'Content-Type': 'application/json' });
  }

  setSelect(id: any) {
    this.select.next(id);
  }


  set_format_date(date_time) {
    // tslint:disable-next-line:prefer-const
    let date = new Date(date_time);
    // tslint:disable-next-line:prefer-const
    let date1 = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
    // tslint:disable-next-line:prefer-const
    let month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
    // tslint:disable-next-line:prefer-const
    let result = date1 + '-' + month + '-' + date.getFullYear();
    return result;
  }

  calDate(start_date, end_date) {
    // tslint:disable-next-line:prefer-const
    let from = moment(new Date(start_date).getTime());
    // tslint:disable-next-line:prefer-const
    let to = moment(new Date(end_date).getTime());
    return to.diff(from, 'days');
  }

  isConflict(a: any, b: any): boolean {
    let case1 = this.calDate(a.first, b.second) < 0;
    let case2 = this.calDate(b.first, a.second) < 0;
    if (case1 || case2) {
      return false;
    }
    return true;
  }

  checkConflict(arr, left, right) {
    this.quickSort(arr, left, right);
    for (let i = 0; i < right; i++) {
      if (this.isConflict(arr[i], arr[i + 1]) == true) {
        console.log('Conflict');
        return true;
      }
    }
    return false;
  }
  // QUICK SORT

  private partition(arr, left, right): number {
    let i = left, j = right;
    let tmp;
    // tslint:disable-next-line:radix
    let index = parseInt(((left + right) / 2) + '');
    // tslint:disable-next-line:prefer-const
    let pivot = arr[index].first;
    while (i <= j) {
      // tslint:disable-next-line:prefer-const
      while (this.calDate(arr[i].first, pivot) > 0) {
        i++;
      }
      while (this.calDate(arr[j].first, pivot) < 0) {
        j--;
      }
      if (i <= j) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(arr, left, right) {
    // tslint:disable-next-line:prefer-const
    let index = this.partition(arr, left, right);
    if (left < index - 1) {
      this.quickSort(arr, left, index - 1);
    }
    if (index < right) {
      this.quickSort(arr, index, right);
    }
  }

  // HTTP
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

  sendGET(url: any, param: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({ headers: this.headers });

    return this.http.get(url + param, options)
      .map((res: Response) => this.extractData(res))
      .catch((error: any) => this.handleError(error));

  }

  sendPOST(url: any, body: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let bodyString = JSON.stringify(body);
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({ headers: this.headers });

    return this.http.post(url, bodyString, options)
      .map((res: any) => this.extractData(res))
      .catch((error: any) => this.handleError(error));
  }

  public extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // tslint:disable-next-line:prefer-const
    let errorMessage = (error.message) ? (error.message) : error.status ? `${error.status}-${error.statusText}` : 'Server error';
    return Observable.throw(error.json());
  }

  // get localstorage
  public getSessionStorage(key: string, init: string): string {
    let data = '';
    if (typeof (Storage) != 'undefined') {
      let ses_page = localStorage[key] + '';
      // tslint:disable-next-line:radix
      if (ses_page != 'undefined') {
        // tslint:disable-next-line:radix
        data = localStorage[key];
      } else {
        data = init;
        localStorage.setItem(key, init);
      }
    }
    return data;
  }
}
