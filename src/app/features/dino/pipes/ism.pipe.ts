import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ism',
  standalone: true
})
export class IsmPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 0) return '0';

    const SI_PREFIXES = [
      { value: 1E-24, symbol: 'y' },
      { value: 1E-21, symbol: 'z' },
      { value: 1E-18, symbol: 'a' },
      { value: 1E-15, symbol: 'f' },
      { value: 1E-12, symbol: 'p' },
      { value: 1E-9, symbol: 'n' },
      { value: 1E-6, symbol: 'µ' },
      { value: 1E-3, symbol: 'm' },
      { value: 1E-2, symbol: 'c' },
      { value: 1E-1, symbol: 'd' },
      { value: 1E3, symbol: 'k' },
      { value: 1E6, symbol: 'M' },
      { value: 1E9, symbol: 'G' },
      { value: 1E12, symbol: 'T' },
      { value: 1E15, symbol: 'P' },
      { value: 1E18, symbol: 'E' },
      { value: 1E21, symbol: 'Z' },
      { value: 1E24, symbol: 'Y' }
    ];

    const absNum = Math.abs(value);
    const sign = Math.sign(value);
    const prefix = SI_PREFIXES.slice().reverse().find(prefix => absNum >= prefix.value)
      || SI_PREFIXES.find(prefix => absNum <= prefix.value)
      || { value: 1, symbol: '' };

    return (sign * absNum / prefix.value).toFixed(2) + prefix.symbol;
  }

}
