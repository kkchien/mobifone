import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OrderService } from './order.service';
import { ValidateService } from './validate.service';

@Injectable()
export class OrderGuard implements CanActivate {

  private confirm: boolean;
  constructor(private _service: OrderService, private router: Router) {

  }

  canActivate(): boolean {
    this.check();
    // tslint:disable-next-line:prefer-const
    console.log(this.confirm);
    // tslint:disable-next-line:curly
    // tslint:disable-next-line:triple-equals
    // tslint:disable-next-line:curly
    if (this.confirm === false)
      // tslint:disable-next-line:no-unused-expression
      this.router.navigate(['home']);
    return this.confirm;
  }

  check(): void {
    this._service.confirm$.subscribe(
      confirm => this.confirm = confirm
    );
    return;
  }
}
