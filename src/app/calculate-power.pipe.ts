import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculatePower',
  standalone: true
})
export class CalculatePowerPipe implements PipeTransform {

  transform(base:number, expo:number): number {
    let power=1;
    for(let i=1;i<=expo;i++)
    {
      power=power*base;
    }
    return power;
  }

}
