import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  notice = '';
  year: any;
  month: any;
  day: any;
  constructor(private language: LanguageService, private title: Title) {
    this.language.type$.subscribe(
      type => {
        if (type == 0) {
          this.title.setTitle('Câu hỏi thường gặp');

        } else if (type == 1) {
          this.title.setTitle('FAQS');
        }
        this.notice = this.language.getLanguage(type).body['404'];
      }
    );
  }
  ngOnInit() {
    this.year = [];
    this.month = [];
    this.day = [];
    for (let i = 0; i < 100; i++) {
      this.year.push(1920 + i);
      if (i < 12) {
        if (i < 9) {
          this.month.push('0' + (i + 1));
        } else {
          this.month.push(i + 1);
        }
      }
      if (i < 31) {
        if (i < 9) {
          this.day.push('0' + (i + 1));
        } else {
          this.day.push(i + 1);
        }
      }
    }
  }

}
