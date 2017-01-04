import { Component } from '@angular/core';
import { DeviceService } from '../device/device.service';
import { DeviceComponent } from '../device/device.component';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {

    devices: DeviceComponent[] = [];
    service: DeviceService;
    mensagem: string = '';

    constructor(service: DeviceService) {
        
        this.service = service;
        this.service
            .lista()
            .subscribe(devices => {
                this.devices = devices;
            }, erro => console.log(erro));
       
    }

 }