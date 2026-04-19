import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {

    if(value>=0 && value<=25)
      return 'C'
    else if(value>=26 && value<=75)
      return 'B'
    else if(value>=76 && value<=100)
      return 'A'
    else
      return "Invalid marks";
  }

}
