import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseStrategy } from '../util/reuse-strategy';
const routes: Routes = [
  {
    path: '', component: BlogSectionComponent,
    children: [
      { path: '', component: BlogListComponent },
      { path: 'detail', component: BlogDetailComponent },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
