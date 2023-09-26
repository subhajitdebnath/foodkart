import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: any;

  constructor(
    private eleRef: ElementRef
  ) {
    this.eleRef.nativeElement.innerHTML = "hello "
  }

  @HostListener('click') onClick() {
    // console.log('clicked');
  }

  @HostListener('mouseover') onMouseOver() {
    console.log(this.highlightColor);
    this.eleRef.nativeElement.style.color = this.highlightColor;
  }

  @HostListener('mouseout') onMouseOut() {
    this.eleRef.nativeElement.style.color = "black";
  }

}
