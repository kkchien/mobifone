import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule, RouteReuseStrategy, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HeadComponent } from './partital/head/head.component';
import { FooterComponent } from './partital/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LanguageService } from './language/language.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReuseStrategy } from './util/reuse-strategy';
import { SharedModule } from './shared/shared.module';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderFirstComponent } from './order/order-first/order-first.component';
import { OrderSecondComponent } from './order/order-second/order-second.component';
import { PersonalInfoComponent } from './order/component/personal-info/personal-info.component';
import { PassportInfoComponent } from './order/component/passport-info/passport-info.component';
import { ReturnInfoComponent } from './order/component/return-info/return-info.component';
import { ReceiveInfoComponent } from './order/component/receive-info/receive-info.component';
import { OrderService } from './order/order.service';
import { CustomPreloadingStrategy } from './util/custom-preloading-strategy';
import 'eonasdan-bootstrap-datetimepicker';
import { HttpModule, Http } from '@angular/http';
import { LazyReuse } from './util/lazy-reuse';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FaqService } from './faq/faq.service';
import { TestDataService } from './util/test-data.service';
import { FaqDetailComponent } from './faq/faq-detail/faq-detail.component';
import { HoverDirective } from './home/hover.directive';
import { HoverOutDirective } from './home/hover-out.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { PriceComponent } from './home/price/price.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { AppConfig } from './app-config';
import { TestNavComponent } from './test-nav/test-nav.component';
import { NewLine } from './pipe/pipebreakline';
import { PlaceRegisterComponent } from './place-register/place-register.component'
import { PlaceService } from './place-register/place.service';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data: { key: 'home' } },
  { path: 'contact', component: ContactComponent, data: { key: 'contact' } },
  { path: 'faq', component: FaqComponent, data: { key: 'faq' } },
  { path: 'account', component: AccountComponent, data: { key: 'account' } },
  { path: 'price', component: PriceTableComponent, data: { key: 'price' } },
  { path: 'place-register', component: PlaceRegisterComponent, data: { key: 'place-register' } },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule', data: { preload: false, key: 'blog' } },
  { path: 'order', loadChildren: './order/order.module#OrderModule', data: { preload: true, key: 'order' } },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

// tslint:disable-next-line:prefer-const
export function configFactory(config: AppConfig) {
  return () => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    FaqComponent,
    ContactComponent,
    AccountComponent,
    FaqDetailComponent,
    HoverDirective,
    HoverOutDirective,
    NotFoundComponent,
    PriceComponent,
    PriceTableComponent,
    TestNavComponent,
    NewLine,
    PlaceRegisterComponent,
    // OrderFirstComponent,
    // OrderSecondComponent,
    // PersonalInfoComponent,
    // PassportInfoComponent,
    // ReturnInfoComponent,
    // ReceiveInfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: CustomPreloadingStrategy }),
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot(),
    NgbModule.forRoot(),
    HttpModule,
    // InMemoryWebApiModule.forRoot(TestDataService),
    NgbModule,
    BrowserAnimationsModule
  ],
  // { provide: RouteReuseStrategy, useClass: ReuseStrategy }
  providers: [
    FaqService,
    PlaceService,
    CustomPreloadingStrategy,
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [AppConfig],
      multi: true
    },
    // {provide: RouteReuseStrategy, useClass: ReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
