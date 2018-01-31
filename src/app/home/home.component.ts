import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { Title } from '@angular/platform-browser';
import { UtilsService } from '../util/utils.service';
import { ActivatedRoute } from '@angular/router';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {

  // tslint:disable-next-line:no-input-rename
  @Input('data')
  info: any = {};
  divId: any;
  constructor(private language: LanguageService,
    private _util: UtilsService,
    private titleService: Title,
    private _route: ActivatedRoute) {
    this.language.type$.subscribe(
      type => {
        this.info = this.language.getTitle(type, 'app')['home'];
        this.titleService.setTitle(this.info.title);
      }
    );

    this.language.divId$.subscribe(id=>{
      this.divId = id;
      console.log("Div id: "+ this.divId);
    })
  }
 
 
  ngAfterViewInit(){
    this._route.queryParams.subscribe(
      params => {
        if(params['target'] != undefined){
          let target = params['target'];
          this.goTo(target);
        }});
  }

  ngOnInit() {
    localStorage.setItem('select_tab', '0');
    this.language.setSelect(0);
  }

  goTo(id:any){
    $('html,body').animate({
      scrollTop: $('#'+id).offset().top
    }, 1000);
  }
  


}
