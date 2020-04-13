import { environment } from './../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss'],
  providers: [CookieService]
})
export class CookieBannerComponent implements OnInit {
  isBannerOpen = true;

  @Input()
  showBanner = false;

  get expiresAllowDate() {
    return new Date(new Date().setFullYear(new Date().getFullYear() + 99));
  }

  get expiresRefuseDate() {
    return new Date(new Date().setDate(new Date().getDate() + 1));
  }

  constructor(private angulartics: Angulartics2GoogleGlobalSiteTag,
              private cookieService: CookieService) { }

  ngOnInit() {
    if (this.cookieService.check('cookiesAllowed') && !this.showBanner) {
      this.isBannerOpen = false;

      if (this.cookieService.get('cookiesAllowed') === 'true') {
        this.startTracking();
      }
    }
  }

  refuseCookies() {
    this.isBannerOpen = false;
    this.cookieService.set('cookiesAllowed', 'false', this.expiresRefuseDate);
  }

  allowCookies() {
    this.isBannerOpen = false;
    this.cookieService.set('cookiesAllowed', 'true', this.expiresAllowDate);
    this.startTracking();
  }

  startTracking() {
    if (environment.production) {
      this.angulartics.startTracking();
    }
  }
}
