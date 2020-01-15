import { NgModule, SkipSelf, Optional, ErrorHandler } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ApiService } from './services/api.service';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { LanguageService } from './services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { LogoutComponent } from './components/logout/logout.component';


const providers = [
  ApiService,
  LanguageService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
  {provide: ErrorHandler, useClass: ErrorHandlerService},
  SharedDataService
];

const exportedModules = [
  CommonModule,
  FormsModule,
  TranslateModule,
  HttpClientModule,
  ReactiveFormsModule
];

@NgModule({
  declarations: [LogoutComponent],
  imports: [
    ...exportedModules
  ],
  exports: [
    LogoutComponent,
    TranslateModule,
    ...exportedModules
  ]
})
export class SharedModule {

  constructor() {}

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    };
  }
}
