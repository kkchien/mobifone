import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../language/language.service';

@Component({
  selector: 'home-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  price:any;

  constructor(private _service: LanguageService) {
    this._service.getCountries().subscribe(
      data => {
        this.price = data;
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
  }

}
