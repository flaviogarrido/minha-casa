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

    constructor(service: DeviceService, fb: FormBuilder, route: ActivatedRoute, router: Router) {

        this.service = service;        
        
        this.route = route;
        this.router = router;

        this.route.params.subscribe(params => {

            let id = params['id'];
            
            if(id) {

                this.service
                    .buscaPorId(id)
                    .subscribe(
                        device => this.device = device, 
                        erro => console.log(erro)
                    );
            }

        });


    }
    
}