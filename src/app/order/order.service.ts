import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Destination } from './model/destination';
import { LanguageService } from '../language/language.service';
import { UtilsService } from '../util/utils.service';

@Injectable()
export class OrderService {
  // tslint:disable-next-line:quotemark
  // POST_ORDER_URL = '/order';
  // ORDER_URL = '/order';
  // COUNTRY_ORDER_URL = 'api/countries';
  // AIRPORT_URL = 'api/airport';
  // AREA_URL = 'api/area';

  ORDER_URL: any;
  COUNTRY_ORDER_URL: any;
  AIRPORT_URL: any;
  AREA_URL: any;
  STATUS_URL: any;
  PROVINCE_URL: any;
  CHILDREN_URL: any;
  CODE_URL: any;
  PRICE_URL: any;
  PACKAGE_URL: any;

  // tslint:disable-next-line:no-inferrable-types
  done: boolean = false;
  confirm$: Observable<boolean>;
  private confirm: Subject<boolean>;
  country: Destination[] = [];

  raw$: Observable<any>;
  private raw: Subject<any>;


  info$: Observable<any>;
  private info: Subject<any>;
  constructor(private http: Http, private _language: LanguageService, private _util: UtilsService) {
    this.initApi();
    this.info = new BehaviorSubject<any>({});
    this.info$ = this.info.asObservable();
    this.raw = new BehaviorSubject<any>({});
    this.raw$ = this.raw.asObservable();
    this.confirm = new BehaviorSubject<boolean>(false);
    this.confirm$ = this.confirm.asObservable();

    // this.getCountries().subscribe(
    //   data => this.country = data
    // );
  }

  initApi() {
    this.ORDER_URL = this._language.getAPI('order')['post'];
    this.COUNTRY_ORDER_URL = this._language.getAPI('order')['country'];
    this.AIRPORT_URL = this._language.getAPI('order')['airport'];
    this.AREA_URL = this._language.getAPI('order')['area'];
    this.STATUS_URL = this._language.getAPI('order')['status'];
    this.PROVINCE_URL = this._language.getAPI('order')['province'];
    this.CHILDREN_URL = this._language.getAPI('order')['children'];
    this.CODE_URL = this._language.getAPI('order')['code-sale'];
    this.PACKAGE_URL = this._language.getAPI('order')['packages'];
    this.PRICE_URL = this._language.getAPI('order')['price'];
  }


  setConfirm(value: boolean) {
    // this.confirm.next(value);
    this.done = value;
  }

  isConfirm(): boolean {
    return this.done;
  }


  setInfo(value: any) {
    this.done = true;
    this.confirm.next(true);
    this.info.next(value);
  }

  setRaw(value: any) {
    this.done = true;
    this.confirm.next(true);
    this.raw.next(value);
  }

  postOrder(body: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let bodyString = JSON.stringify(body);
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.ORDER_URL, bodyString, options)
      .map((res: any) => this.extractData(res))
      .catch((error: any) => this.handleError(error));
  }

  getOrder(id: any): Observable<any> {
    return this._util.sendGET(this.ORDER_URL, id);
  }

  getCountries(): Observable<Destination[]> {
    return this._util.sendGET(this.COUNTRY_ORDER_URL, '');
  }

  getAirports(): Observable<any> {
    return this._util.sendGET(this.AIRPORT_URL, '');
  }

  getAreas(): Observable<any> {
    return this._util.sendGET(this.AREA_URL, '');
  }

  getStatus(key: any, status: any): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({ headers: headers });

    return this.http.get(`${this.STATUS_URL}/${key}/${status}`, options)
      .map((res: Response) => this.extractData(res))
      .catch((error: any) => this.handleError(error));
  }

  getCodeDetail(code: any) {
    return this._util.sendGET(this.CODE_URL, code);
  }

  getPackages(type: any): Observable<any> {
    return this._util.sendGET(this.PACKAGE_URL, type);
  }

  getPrice(type: any): Observable<any> {
    return this._util.sendGET(this.PRICE_URL, type);
  }

  getProvinces(): Observable<any> {
    return this._util.sendGET(this.PROVINCE_URL, '');
  }

  getChildren(id: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:prefer-const
    return this._util.sendGET(this.CHILDREN_URL, id);
  }

  // ========== Utility ============
  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    console.log(error)
    // tslint:disable-next-line:prefer-const
    let errorMessage = (error.message) ? (error.message) : error.status ? `${error.status}-${error.statusText}` : 'Server error';
    return Observable.throw(error.json() || error);
  }
}
