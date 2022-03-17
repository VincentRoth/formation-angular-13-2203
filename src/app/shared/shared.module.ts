import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MailToDirective } from './mail-to.directive';
import { PhonePipe } from './phone.pipe';
import { TimeInterceptor } from './api/time.interceptor';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [MailToDirective, PhonePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [MailToDirective, PhonePipe, UiModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
  ],
})
export class SharedModule {}
