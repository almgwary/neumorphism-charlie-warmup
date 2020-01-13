import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ApiService } from './services/api.service';
import { SharedDataService } from './services/shared-data/shared-data.service';
import { LanguageService } from './services/language/language.service';
import { TranslateModule } from '@ngx-translate/core';


const providers = [
  ApiService,
  LanguageService,
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers
    };
  }
}
