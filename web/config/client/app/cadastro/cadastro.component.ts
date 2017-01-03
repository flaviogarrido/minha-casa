import { Component } from '@angular/core';
import { DeviceComponent } from '../device/device.component';
import { DeviceService } from '../device/device.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent { 

    device: DeviceComponent = new DeviceComponent();
    meuForm: FormGroup;
    service: DeviceService;
    route: ActivatedRoute;
    router: Router;
    mensagem: string = '';

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

        
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            imageurl: ['', Validators.required],
            deviceurl: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event) {

        event.preventDefault();

        console.log(this.device);

        this.service
            .cadastra(this.device)
            .subscribe(res => {
                this.mensagem = res.mensagem;
                this.device = new DeviceComponent();
                if(!res.inclusao) this.router.navigate(['']);
            }, erro => console.log(erro));
    }

}