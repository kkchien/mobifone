import { Directive, Renderer, ElementRef, HostListener, HostBinding, style } from '@angular/core';

@Directive({
  selector: '[hover-in]'
})
export class HoverDirective {

  @HostBinding('style.font-size')
  color = '40pt';

  constructor(private el: ElementRef,
    private renderer: Renderer) {

  }

  @HostListener('mouseover') onMouseOver() {
    this.color = '55pt'
    this.el.nativeElement.style['color'] = '#dc9090';
    // alert('red');
  }

  @HostListener('mouseout') onMouseOut() {

    this.color = '40pt'
    this.el.nativeElement.style['color'] = 'white';
    // alert('red');
  }
}
