import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDisableAfterClick]',
  standalone: true
})
export class DisableAfterClickDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const button = this.el.nativeElement;
    button.disabled = true;
    const originalText = button.innerText;
    button.innerText = 'Processing...';
    setTimeout(() => {
      button.disabled = false;
      button.innerText = originalText;
    }, 3000);
  }
}