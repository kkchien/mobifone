import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[hover-out]'
})
export class HoverOutDirective {

  @HostBinding('style.color')
  color = '#337ab7';

  constructor(private el: ElementRef,
    private renderer: Renderer) {

  }

  @HostListener('mouseenter') onMouseOver() {
    this.color = 'white';
    // alert('red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.color = '#337ab7';
    // alert('red');
  }

}
