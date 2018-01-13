import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatUpperCase'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toUpperCase();
  }

}
