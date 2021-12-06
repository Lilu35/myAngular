import {ComponentRef, Directive, EventEmitter, ElementRef, HostBinding, HostListener, Input, Output} from '@angular/core';
import {CartComponent} from "../cart/cart.component";


@Directive({
  selector: '[clickpast]'
})
export class ClickpastDirective {
  get host(){
    return this.elRef.nativeElement;
  }

  @HostListener('document:click', ['$event'])
  documentClickEvent(event: Event) {
    if (!this.host.contains(event.target)) {
      this.host.onClose();
    }
  }

  constructor(private elRef: ElementRef) { }

}
// во втором задании 10-ой домашки не сворачивается по клику вне элемента
