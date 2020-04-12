import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appInit]'
})
export class InitDirective {
  @Output() appInit = new EventEmitter();

  @HostListener('load')
  loaded() {
    this.appInit.emit();
  }
}
