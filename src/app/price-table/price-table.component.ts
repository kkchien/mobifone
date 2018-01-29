import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { Pagination } from '../model/pagination';
import { Title } from '@angular/platform-browser';
import { UtilsService } from '../util/utils.service';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {

  price: any;
  pagination: Pagination;
  currentPage = 1
  title: any;
  constructor(private _service: LanguageService, private _util: UtilsService, private _title: Title) {

  }

  ngOnInit() {
    this._service.setSelect(3);
      this._service.getCountries().subscribe(
      data => {
        data.forEach(
          el => {
            el['img'] = el.area_name.split(' ').join('_').toLowerCase();
          }
        );
        this.price = data;
        this.pagination = new Pagination(this.price, 24, 1);
      },
      error => console.log(error)
      );
    this._service.type$.subscribe(
      type => {
        this.title = this._service.getTitle(type, 'app')['price-table'];
        this._title.setTitle(this.title.title);
      }
    );
  }

  change() {
    this.pagination.setPage(this.currentPage);
  }

}
