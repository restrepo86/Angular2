import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appAttr]'
})
export class AttrDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "yellow";
  }

}
