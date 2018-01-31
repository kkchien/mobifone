import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FaqService } from './faq.service';
import { Title } from '@angular/platform-browser';
import { UtilsService } from '../util/utils.service';
import { LanguageService } from '../language/language.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit, AfterViewInit {


  faqs = [];
  // tslint:disable-next-line:no-inferrable-types
  page: number = 1;
  // tslint:disable-next-line:no-inferrable-types
  count: number = 10;
  show = [];
  total: number;
  info_item ={}
  constructor(private faq_service: FaqService,
    private titleService: Title,
    private utils: UtilsService,
    private language: LanguageService) {
    this.language.setSelect(4)
    this.language.type$.subscribe(
      type => {
        // this.info = this.language.getTitle(type, 'app')['home'];
        this.info_item = this.language.getTitle(type,'app')['faq'];
        // console.log("log: "+ this.info_item.length);
        let title = this.language.getTitle(type, 'app').faq;
        this.titleService.setTitle(title.title)
        this.faq_service.getFAQs(type).subscribe(
          success => {
            // let temp_page = this.utils.getSessionStorage('faq-page', '1');
            // tslint:disable-next-line:radix
            // this.page = parseInt(temp_page);
            this.faqs = success;
            console.log("return map 0: "+ this.faqs.length);
            // this.show = this.faqs.slice((this.page - 1) * this.count, this.count * this.page);
            // this.total = Math.ceil((this.faqs.length / this.count)) * 10;

          },
          error => console.log(error)
        );
      }
    );
    setTimeout(
      ()=>{
        console.log(this.faqs.length)
      },0
    );
  }
  getSize()
  {
    console.log("Getsize: "+ this.faqs.length);
  }

  ngOnInit() {
    // this.faq_service.getFAQs('vn').subscribe(
    //   success => {
    //     let temp_page = this.utils.getSessionStorage('faq-page', '1');
    //     // tslint:disable-next-line:radix
    //     this.page = parseInt(temp_page);
    //     this.faqs = success;
    //     this.show = this.faqs.slice((this.page - 1) * this.count, this.count * this.page);
    //     this.total = Math.ceil((this.faqs.length / this.count)) * 10;
    //   },
    //   error => console.log(error)
    // );
  }

  ngAfterViewInit(): void {
    // tslint:disable-next-line:radix
  }

  // changePage(page: number) {
  //   let index = (page - 1) * this.count;
  //   this.show = this.faqs.slice(index, this.count * page);
  //   if (typeof (Storage) != 'undefined') {
  //     localStorage.setItem('faq-page', page + '');
  //   }
  // }
}
