import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(valorCarta : string | number): string {

    return `assets/cartas/${valorCarta}.png`;
  }

}
