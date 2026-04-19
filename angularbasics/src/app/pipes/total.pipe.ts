import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})

// <p>{{"Nisha": total :12 :34:89}}</p>

export class TotalPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    let sum=0;
    for(let i of args)
      sum+=i;
    return `${value} has got total ${sum} marks`;
  }

}
