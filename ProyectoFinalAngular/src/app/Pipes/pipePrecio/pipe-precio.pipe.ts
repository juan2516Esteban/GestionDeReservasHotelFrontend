import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipePrecio',
})
export class PipePrecioPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'string') {
      value = parseFloat(value); // Convierte el valor de string a número
    }
    if (typeof value === 'number' && !isNaN(value)) {
      return value.toLocaleString(); // Formatea el número con puntos de mil
    }
    return ''; // Si no es un número válido, devuelve una cadena vacía
  }
}
