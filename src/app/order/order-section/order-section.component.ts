import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../util/utils.service';
import { LanguageService } from '../../language/language.service';

@Component({
  selector: 'app-order-section',
  templateUrl: './order-section.component.html',
  styleUrls: ['./order-section.component.css']
})
export class OrderSectionComponent implements OnInit {

  constructor(private _util: UtilsService, private _language: LanguageService) {
    localStorage.setItem('select_tab','1');
    this._language.setSelect(1);
   }

  ngOnInit() {
  }

}
