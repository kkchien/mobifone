import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  page = 1;
  data: any;
  constructor() { }

  ngOnInit() {
  }

  changePage(page: number) {
    this.data = 'Xin chao, ban dang o trang thu ' + page;
  }
}
