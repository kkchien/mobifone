import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseStrategy } from '../util/reuse-strategy';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgbModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: ReuseStrategy }],
  declarations: [BlogSectionComponent, BlogListComponent, BlogDetailComponent]
})
export class BlogModule { }
