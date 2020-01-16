import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LANG_LOCAL_STORAGE_KEY, RTL_LANGUAGES, DIRECTION } from '../../models/constants';
import { Language } from '../../models/language.enum';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {
    this.initLanguageService();
  }

  set language(language: Language) {
    this.setLangOnLocalStorage(language);
    this.initLanguageService();
  }

  get language(): Language {
    return this.getLang();
  }



  get isRtl(): boolean {
    const isLanguageRtl = RTL_LANGUAGES.indexOf(this.language) > -1;
    return isLanguageRtl;
  }


  private initLanguageService() {
    const language = this.language;
    this.translate.setDefaultLang(language);
    this.translate.use(language);
    if (document) {
      document.documentElement.lang = this.language;
    }
    this.initBodyDirection();
  }


  private initBodyDirection() {
    if (document) {
      document.dir = this.isRtl && DIRECTION.RTL || DIRECTION.LTR;
    }
  }

  private getLang(): Language {
    const dataString: any = localStorage.getItem(LANG_LOCAL_STORAGE_KEY) || Language.DE;
    return dataString;
  }

  private setLangOnLocalStorage(lang: Language) {
    localStorage.setItem(LANG_LOCAL_STORAGE_KEY, lang);
  }
}
