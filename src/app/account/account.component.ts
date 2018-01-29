import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';
// window['$'] = $;
// window['jQuery'] = $;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _title: Title) { }

  ngOnInit() {
    // $('#test').datetimepicker();
  }

}
