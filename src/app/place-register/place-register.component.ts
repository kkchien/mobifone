import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LanguageService } from '../language/language.service';
import { PlaceService } from './place.service';
// import { OrderService } from 'order.service';
// import { LanguageService } from '../language/language.service';
declare const google: any;
@Component({
  selector: 'app-place-register',
  templateUrl: './place-register.component.html',
  styleUrls: ['./place-register.component.css']
})
export class PlaceRegisterComponent implements OnInit {
  provices = [];
  formGroup: FormGroup;
  agency: any = [];
  page: number = 1;
  count: number = 5;
  show = [];
  listLength: number;
  data:any = {};
  constructor(private _fb: FormBuilder, private _placeService: PlaceService, private _language: LanguageService) {
    this._placeService.getProvinces().subscribe(
      data => {
        console.log(data);
        this.provices = data
      }
    );
    this._language.type$.subscribe(
      type => {this.data = this._language.getTitle(type,'app')['place_register'];
      console.log("aaa: " +this.data)
      })

  }
  ngOnInit() {
    // this.initMap();
    this.startUp();
  }
  
  private getAgency(id: number) {
    this.changeProvince(id);
  }
  private changeProvince(id: number) {
    this._placeService.getChildren(id).subscribe(
      data => {
        if (data.length > 0) {
          this.agency = data.filter(el => el.status == 1);
          if (this.agency.length > 0) {
            this.show = this.agency.slice((this.page - 1) * this.count, this.count * this.page);
            this.listLength = Math.ceil(this.agency.length / this.count) * 10;
            console.log("Count: "+ this.count);
            console.log("mang: "+ this.agency.length);
            console.log("Listlenght: "+ this.listLength);
            console.log("Page: "+ this.page);
          }

        }
      }
    );
  }
  changePage(page: number) {
    let index = (page - 1) * this.count;
    this.show = this.agency.slice(index, this.count * page);
  }

  startUp() {
    this.formGroup = this._fb.group({
      provice: ['',]
    })
  }

  get provice(): FormControl {
    return this.formGroup.controls.provice as FormControl;
  }

  // initMap() {
  //   const myLatlng = new google.maps.LatLng(21.0324225, 105.7827771);
  //   const mapProp = {
  //     center: new google.maps.LatLng(21.0324225, 105.7827771),
  //     zoom: 13,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   };
  //   const map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
  //   const marker = new google.maps.Marker({
  //     draggable: true,
  //     animation: google.maps.Animation.DROP,
  //     position: myLatlng,
  //     map: map,
  //     title: 'Mobifone IT'
  //   });

  // }

}
