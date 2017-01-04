import { Pipe, PipeTransform } from '@angular/core';
import { DeviceComponent } from './device.component';
 
@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform { 

    transform(devices: DeviceComponent[], digitado: string): DeviceComponent[] {

        digitado = digitado.toLowerCase();
        return devices.filter( device => device.titulo.toLowerCase().includes(digitado));
    }
}