import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LanguageService } from '../language/language.service';
@Injectable()
export class FaqService {

  // FAQ_URL = 'api/faqs';
  FAQ_URL: any;
  constructor(private http: Http, private _language: LanguageService) {
    this.FAQ_URL = this._language.getAPI('faq')['list'];
   }


  getFAQs(type: number): Observable<any> {
    let lan = '';
    if (type == 0) {
      lan = 'vn';
    } else {
      lan = 'en';
    }
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({ 'Content-Type': 'application/json' });
    // tslint:disable-next-line:prefer-const
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.FAQ_URL + '/language/' + lan, options)
      .map((res: Response) => this.extractData(res))
      .catch((error: any) => this.handleError(error));
  }

  // ========== Utility ============
  private extractData(res: Response) {
    // tslint:disable-next-line:prefer-const
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    // tslint:disable-next-line:prefer-const
    let errorMessage = (error.message) ? (error.message) : error.status ? `${error.status}-${error.statusText}` : 'Server error';
    return Observable.throw(error.json());
  }
}
