import { Component } from '@angular/core';
import { LanguageService } from './modules/shared/services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'charlie-warmup';

  constructor(private languageService: LanguageService) {

  }
}
