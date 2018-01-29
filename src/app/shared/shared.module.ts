import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';
import { LanguageService } from '../language/language.service';
import { UtilsService } from '../util/utils.service';
import { Title } from '@angular/platform-browser';
import { DateInputComponent } from './component/date-input/date-input.component';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';
import { AppConfig } from '../app-config';


@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [SharedComponent, DateInputComponent],

  exports: [SharedComponent, DateInputComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AppConfig,
        // {
        //   provide: LanguageService,
        //   useFactory: laguageServiceFactory,
        //   deps: [Http]
        // },
        LanguageService,
        UtilsService, Title]
    };
  }
}

// tslint:disable-next-line:prefer-const
// let laguageServiceFactory = (http: Http) => {
//   return LanguageService.getInstance(http);
// };
