import { NgModule } from '@angular/core';
import { DeviceComponent } from './device.component';
import { DeviceService } from './device.service';
import { FiltroPorTitulo } from './device.pipes';

@NgModule({
    declarations: [ DeviceComponent, FiltroPorTitulo],
    exports: [ DeviceComponent, FiltroPorTitulo ],
    providers: [ DeviceService ]
})
export class DeviceModule { }