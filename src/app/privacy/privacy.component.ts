import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../game/shared/local-storage.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  currentLanguage = '';

  constructor(private localStorageService: LocalStorageService,
              public translate: TranslateService) { }

  ngOnInit() {
    this.translate.addLangs(['en', 'de']);
    this.translate.setDefaultLang('en');

    const language = this.localStorageService.loadSelectedLanguage();

    if (language) {
      this.translate.use(language);
    } else {
      const browserLang = this.translate.getBrowserLang();
      this.translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
    }

    this.currentLanguage = this.translate.currentLang;
  }

}
