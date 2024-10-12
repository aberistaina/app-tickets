import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatRut'
})
export class FormatRutPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    let rut = value.slice(0, -1); 
    let dv = value.slice(-1);   

    rut = rut.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    dv = dv.toUpperCase();

    return `${rut}-${dv}`;
  }

}
