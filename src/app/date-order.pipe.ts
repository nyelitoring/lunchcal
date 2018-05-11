import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateOrder'
})
export class DateOrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let newVal = value.sort((a: any, b: any) => {
        if (a.payload) {
          a = a.payload.val();
        }
        if (b.payload) {
          b = b.payload.val();
        }

        let date1 = new Date(a.date);
        let date2 = new Date(b.date);

        if (date1 > date2) {
          return 1;
        } else if (date1 < date2) {
          return -1;
        } else {
          return 0;
        }
      });

      return newVal;
    }
    return 0;
  }

}
