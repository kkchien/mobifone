import { Injectable } from '@angular/core';
import { UtilsService } from '../util/utils.service';
import { LanguageService } from '../language/language.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlaceService {
  URL_PLACE: any;
  URL_CHILDREN: any;
  constructor(private _util: UtilsService, private _language: LanguageService) {
    this.URL_PLACE = this._language.getAPI('order')['province'];
    this.URL_CHILDREN = this._language.getAPI('order')['children'];
  }

  getProvinces(): Observable<any> {
    return this._util.sendGET(this.URL_PLACE, '');
  }
  getChildren(id: any): Observable<any> {
    return this._util.sendGET(this.URL_CHILDREN, id);
  }

}
