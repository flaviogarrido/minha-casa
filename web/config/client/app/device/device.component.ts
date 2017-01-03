import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'device', 
    templateUrl: './device.component.html',
    styleUrls: ['./device.component.css']
})
export class DeviceComponent { 

    @Input() titulo: string;
    @Input() deviceurl: string;
    @Input() imageurl: string;
    descricao: string;
    _id: string;
}