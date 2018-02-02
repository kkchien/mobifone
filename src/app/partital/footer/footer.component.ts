import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from '../../language/language.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

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
  socials: any;

  constructor(private _language: LanguageService, private _router: Router) {
    this._language.type$.subscribe(
      type => {
        this.info = this._language.getTitle(type, 'footer');
        this.data = this._language.getTitle(type, 'header');
        this.socials = this._language.getTitle(type, 'app')['contact'];
        // console.log("mang: "+ this.socials);
        // console.log("menu: "+ this.menu);
      }
    );
  }
  doSelect(id: any) {
      if(this.data.menu[id].target == undefined){
        // console.log('Ok')
        this._router.navigate(['//'+this.data.menu[id].url])
      } else {
        this._router.navigate(['//' +this.data.menu[id].url], {queryParams:{target:this.data.menu[id].target}});
      }
  }

  ngOnInit() {
  }

}
