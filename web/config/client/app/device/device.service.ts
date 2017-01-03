import { Http, Headers, Response } from '@angular/http';
import { DeviceComponent } from './device.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class DeviceService { 

    http: Http;
    headers: Headers;
    url: string = 'v1/devices';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    cadastra(device: DeviceComponent): Observable<MensagemCadastro> {
        
        if(device._id) {

            return this.http
                .put(this.url + '/' + device._id, JSON.stringify(device), { headers: this.headers})
                .map(() => new MensagemCadastro('Device alterado com sucesso', false));

        } else {

            return this.http
                .post(this.url, JSON.stringify(device), { headers: this.headers })
                .map(() => new MensagemCadastro('Device incluído com sucesso', true));

        }
        
    }

    lista(): Observable<DeviceComponent[]> {

        return this.http
        .get(this.url)
        .map(res => res.json());

    }

    remove(device: DeviceComponent):  Observable<Response> {

        return this.http.delete(this.url + '/' + device._id);
    }

    buscaPorId(id: string): Observable<DeviceComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }

}

export class MensagemCadastro {

    constructor(private _mensagem: string, private _inclusao: boolean) {

        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {

        return this._inclusao;
    }

}
