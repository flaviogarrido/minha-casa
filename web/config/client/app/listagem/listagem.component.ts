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

    remove(device: DeviceComponent, painel: PainelComponent) {
        
        this.service
            .remove(device)
            .subscribe(
                () => {

                    painel.fadeOut(() => {

                        let novosDevices = this.devices.slice(0);
                        let indice = novosDevices.indexOf(device);
                        novosDevices.splice(indice, 1);
                        this.devices = novosDevices;
                        this.mensagem = 'Device removido com sucesso';
                    }); 
                }, 
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover o device';
                }
            );

    }
 }