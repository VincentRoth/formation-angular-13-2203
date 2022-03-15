import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'a[appMailTo]',
})
export class MailToDirective implements AfterViewInit {
  @Input('appMailTo') email: string;

  constructor(private el: ElementRef<HTMLAnchorElement>) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.href = `mailto:${this.email}`;
  }
}
