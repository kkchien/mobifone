import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../../language/language.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  // @Input('data')
  // tslint:disable-next-line:semicolon
  info: any;
  // tslint:disable-next-line:semicolon
  subscription: Subscription
  // payment = require('./payment.jpg');
  type: number;
  data: any;

  constructor(private _language: LanguageService) {
    this._language.type$.subscribe(
      type => {
        this.info = this._language.getTitle(type, 'footer');
        this.data = this._language.getTitle(type, 'header');
      }
    );
  }

  ngOnInit() {
  }

}
