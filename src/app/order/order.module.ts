import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderSectionComponent } from './order-section/order-section.component';
import { OrderFirstComponent } from './order-first/order-first.component';
import { OrderSecondComponent } from './order-second/order-second.component';
import { LanguageService } from '../language/language.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PassportInfoComponent } from './component/passport-info/passport-info.component';
import { PersonalInfoComponent } from './component/personal-info/personal-info.component';
import { DestinationInfoComponent } from './component/destination-info/destination-info.component';
import { ReceiveInfoComponent } from './component/receive-info/receive-info.component';
import { ReturnInfoComponent } from './component/return-info/return-info.component';
import { OrderService } from './order.service';
import { RouteReuseStrategy } from '@angular/router';
import { ReuseStrategy } from '../util/reuse-strategy';
import { AppModule } from '../app.module';
import { SharedModule } from '../shared/shared.module';
import { OrderGuard } from './order.guard';
import { ValidateService } from './validate.service';
import { HttpModule } from '@angular/http';
import { UtilsService } from '../util/utils.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeApiService } from './service/fake-api.service';
import { LazyReuse } from '../util/lazy-reuse';
import { NgDatepickerModule } from 'ng2-datepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderResultComponent } from './order-result/order-result.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PromotionComponent } from './component/promotion/promotion.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    HttpModule,
    NgDatepickerModule,
    NgbModule.forRoot(),
    // InMemoryWebApiModule.forRoot(FakeApiService)
  ],
  providers: [OrderService, UtilsService, ValidateService,
    { provide: RouteReuseStrategy, useClass: LazyReuse },
    OrderGuard],
  declarations: [
    OrderSectionComponent, OrderFirstComponent, OrderSecondComponent,
    PassportInfoComponent, PersonalInfoComponent, DestinationInfoComponent,
    ReceiveInfoComponent, ReturnInfoComponent, OrderResultComponent, FirstComponent, SecondComponent,
    PromotionComponent]
})
export class OrderModule {

}
