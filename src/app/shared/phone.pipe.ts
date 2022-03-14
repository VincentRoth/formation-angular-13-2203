import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone',
})
export class PhonePipe implements PipeTransform {
  transform(value: string, separator = '-'): string {
    return value?.replace(/\./g, separator);
  }
}
