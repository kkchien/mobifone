import { Component, OnInit, ViewChild } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { DateInputComponent } from '../shared/component/date-input/date-input.component';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { Title } from '@angular/platform-browser';

declare const google: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  @ViewChild(DateInputComponent) date: DateInputComponent;
  start = 0;
  today = moment().format('YYYY-MM-DD');
  info: any;
  constructor(private languageService: LanguageService,
    private _fb: FormBuilder,
    private _title: Title) {
    this.languageService.setSelect(7)
    this.languageService.type$.subscribe(
      type => {
        this.info = this.languageService.getTitle(type, 'app')['contact'];
        this._title.setTitle(this.info.title)
      }
    );
  }

  test = new Date('October 14, 2017 11:13:00');
  test1 = new Date();

  ngOnInit() {
    this.form = this._fb.group({
      date: this.today
    });

    this.initMap();
  }

  click() {
    this.start++;
    const date1 = moment().add(this.start, 'd').format('YYYY-MM-DD');
    this.today = moment().add(this.start, 'd').format('YYYY-MM-DD');
    this.form.controls.date.setValue(date1);
  }

  initMap() {
    const myLatlng = new google.maps.LatLng(21.0324225, 105.7827771);
    const mapProp = {
      center: new google.maps.LatLng(21.0324225, 105.7827771),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    const marker = new google.maps.Marker({
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: myLatlng,
      map: map,
      title: 'Mobifone IT'
    });

  }
  

}
