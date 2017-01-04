import { Http, Headers, Response } from '@angular/http';
import { DeviceComponent } from './device.component';
import { Observable } from 'rxjs';
import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class DeviceService { 

    http: Http;
    headers: Headers;
    url: string = 'http://192.18.0.98:7801/v1/devices';

    route: ActivatedRoute;
    router: Router;

        
    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');

    }

    lista(): Observable<DeviceComponent[]> {

        return this.http
        .get(this.url)
        .map(res => res.json());

    }

    buscaPorId(id: string): Observable<DeviceComponent> {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }

}

