import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-game-over-dialog',
  templateUrl: './game-over-dialog.component.html',
  styleUrls: ['./game-over-dialog.component.scss']
})
export class GameOverDialogComponent implements OnInit {
  currentLanguage = '';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.currentLanguage = this.translateService.currentLang;
  }

}
