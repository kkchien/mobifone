import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderSectionComponent } from './order-section/order-section.component';
import { OrderFirstComponent } from './order-first/order-first.component';
import { OrderSecondComponent } from './order-second/order-second.component';
import { OrderGuard } from './order.guard';
import { OrderResultComponent } from './order-result/order-result.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {
    path: '',
    component: OrderSectionComponent,
    children: [
      { path: '', component: OrderFirstComponent, data: { key: 'first' } },
      { path: 'second', component: OrderSecondComponent, canActivate: [OrderGuard], data: { key: 'second' } },
      { path: 'result', component: OrderResultComponent},
      { path: 'first1', component: FirstComponent},
      { path: 'first2', component: SecondComponent},
    ],
    data: { key: 'order' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
