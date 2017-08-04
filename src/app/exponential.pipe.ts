import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponential:exponent
 * Example:
 *   {{ 2 |  exponential:10}}
 *   formats to: 1024
*/
@Pipe({name: 'exponential'})
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
