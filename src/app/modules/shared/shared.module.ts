import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ApiService } from './services/api.service';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { LanguageService } from './services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';


const providers = [
  ApiService,
  LanguageService,
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
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
  declarations: [],
  imports: [
    ...exportedModules
  ],
  exports: [
    ...exportedModules
  ]
})
export class SharedModule {

  constructor(@Optional() @SkipSelf() shareModule: SharedModule) {
    if (shareModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    };
  }
}
