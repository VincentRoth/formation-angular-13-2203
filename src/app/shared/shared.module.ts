import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MailToDirective } from './mail-to.directive';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [MailToDirective, PhonePipe],
  imports: [CommonModule, HttpClientModule],
  exports: [MailToDirective, PhonePipe],
})
export class SharedModule {}
