import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DeviceModule } from './device/device.module';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { PainelModule } from './painel/painel.module';
import { ListagemComponent } from './listagem/listagem.component';
import { routing }  from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ 
        BrowserModule, 
        DeviceModule,
        HttpModule, 
        PainelModule, 
        routing, 
        FormsModule, 
        ReactiveFormsModule
    ],
    declarations: [ AppComponent, ListagemComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }