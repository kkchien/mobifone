import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { LanguageService } from '../../language/language.service';
import { Subscription } from 'rxjs/Subscription';
import { UtilsService } from '../../util/utils.service';
import { window } from 'rxjs/operator/window';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  // @Input('data')
  data: any = {};

  // tslint:disable-next-line:no-inferrable-types
  type: number = 0;
  select_tab: any;
  select = [1, 0, 0, 0, 0, 0, 0];
  submenu: any = {};
  checksub:boolean;
  constructor(private _language: LanguageService, private _util: UtilsService, private _router: Router) {
    // this._language.setType(0);
    this._language.type$.subscribe(
      type => {
        this.data = this._language.getTitle(type, 'header');
        this.type = type;
      }
    );
    this._language.select$.subscribe(
      select => {
        this.select_tab = select;
      }
    );
  }
  ngOnInit() {
    
  }
  setLanguageType(type) {
    this._language.setType(type);
    this.type = type;
  }

  doSelect(id: any) {
    this.select_tab = id;
    if(id == 4)
    {
      this.checksub = true;
    }else{
      this.checksub = false;
    }

    if(id != 4){
      if(this.data.menu[id].target == undefined){
        // console.log('Ok')
        this._router.navigate(['//'+this.data.menu[id].url])
      } else {
        this._router.navigate(['//' +this.data.menu[id].url], {queryParams:{target:this.data.menu[id].target}});
      }
    }
    
  }
  setId(id:any)
  {
    this._language.setId(id);
    // console.log("menu id: "+ id);
   
  }

}
