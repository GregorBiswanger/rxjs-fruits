import { Router } from '@angular/router';
import { Component, ViewEncapsulation, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotFoundComponent implements OnDestroy {
  constructor(private router: Router) { }

  goToHomepage() {
    this.router.navigate(['']);
  }
  ngOnDestroy() {
    document.defaultView.location.reload();
  }
}
