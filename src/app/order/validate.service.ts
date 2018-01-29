import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {
  confirm: boolean;
  constructor() { }

  setConfirm(value: boolean) {
    this.confirm = value;
  }

  isConfirm(): boolean {
    return this.confirm;
  }
}
