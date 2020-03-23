import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'code [appTooltip]'
})
export class TooltipDirective {
  @Input()
  appTooltip: HTMLElement;
  hostElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.hostElement = elementRef.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    const domRect = this.hostElement.getBoundingClientRect();

    this.appTooltip.style.visibility = 'visible';
    this.appTooltip.style.top = domRect.y + 32 + 'px';
    this.appTooltip.style.left = domRect.x + 'px';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.appTooltip.style.visibility = 'collapse';
  }
}
