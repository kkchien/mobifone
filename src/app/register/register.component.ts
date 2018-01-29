import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../language/language.service';
import { Validators, FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  country = [];
  returnMethod1: any = -1;
  receiveMethod1: any = -1;
  public myForm: FormGroup;
  constructor(private service: LanguageService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.country = this.service.getCountry();
    this.myForm = this._fb.group({
      personal: this._fb.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        dob: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        emailConfirm: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required]]
      }),
      passport: this._fb.group({
        passportNo: ['', [Validators.required]],
        placeIssue: ['', [Validators.required]],
        dateIssue: ['', [Validators.required]]
      }),
      device: ['', [Validators.required]],
      destination: this._fb.array([
        this._fb.group({
          location: ['', [Validators.required]],
          startDate: ['', [Validators.required]],
          expiredData: ['', [Validators.required]],
          protected: ['', [Validators.required]],
          address: ['', [Validators.required]],
          flightNum: ['', [Validators.required]],
          flightTime: ['', Validators.required]
        })
      ]),
      receive: this._fb.group({
        hotelAddress: ['', [Validators.required]],
        hotelName: ['', [Validators.required]],
        bookingName: ['', [Validators.required]],
        departureTime: ['', [Validators.required]]
      }),
      return: this._fb.group({
        hotelAddress: ['', [Validators.required]],
        hotelName: ['', [Validators.required]],
        bookingName: ['', [Validators.required]],
        departureTime: ['', [Validators.required]]
      }),
      receiveMethod: '',
      returnMethod: ''
    });
  }

  get destinations(): FormArray {
    // tslint:disable-next-line:prefer-const
    return this.myForm.controls.destination as FormArray;
  }

  // Personal validate

  // phone
  get phoneValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    return person.controls.phoneNumber as FormControl;
  }
  // firstname
  get firstNameValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    return person.controls.firstName as FormControl;
  }
  // lastname
  get lastNameValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    return person.controls.lastName as FormControl;
  }

  // dob
  get dobValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    return person.controls.dob as FormControl;
  }
  // email
  get emailValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    return person.controls.email as FormControl;
  }
  // confirmEmail
  get confirmValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    return person.controls.emailConfirm as FormControl;
  }

  // passport validate

  // number
  get passNoValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.passport as FormGroup;
    return person.controls.passportNo as FormControl;
  }

  // place
  get passPlaceValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.passport as FormGroup;
    return person.controls.placeIssue as FormControl;
  }
  // date
  get passDateValidate(): FormControl {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.passport as FormGroup;
    return person.controls.dateIssue as FormControl;
  }


  addDestination() {
    this.destinations.push(
      this._fb.group({
        location: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        expiredData: ['', [Validators.required]],
        protected: ['', [Validators.required]],
        address: ['', [Validators.required]],
        flightNum: ['', [Validators.required]],
        flightTime: ['', Validators.required]
      }));
  }

  removeDestination(index: number) {
    this.destinations.removeAt(index);
  }

  order() {
    // tslint:disable-next-line:prefer-const
    let person = this.myForm.controls.personal as FormGroup;
    console.log(this.phoneValidate);
  }
}
