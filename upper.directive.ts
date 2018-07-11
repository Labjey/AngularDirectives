import { Directive,ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(private e: ElementRef) { 
  }

  ngOnInit(){
    this.e.nativeElement.innerText = this.e.nativeElement.innerText.toUpperCase();
  }
}