import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { DeviceComponent } from './device/device.component';

const appRoutes: Routes = [

    { path: '', component: ListagemComponent },
    { path: 'device/:id', component: DeviceComponent },
    { path: '**', component: ListagemComponent }
];

export const routing = RouterModule.forRoot(appRoutes);