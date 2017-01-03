"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var device_service_1 = require("../device/device.service");
var ListagemComponent = (function () {
    function ListagemComponent(service) {
        var _this = this;
        this.devices = [];
        this.mensagem = '';
        this.service = service;
        this.service
            .lista()
            .subscribe(function (devices) {
            _this.devices = devices;
        }, function (erro) { return console.log(erro); });
    }
    ListagemComponent.prototype.remove = function (device, painel) {
        var _this = this;
        this.service
            .remove(device)
            .subscribe(function () {
            painel.fadeOut(function () {
                var novosDevices = _this.devices.slice(0);
                var indice = novosDevices.indexOf(device);
                novosDevices.splice(indice, 1);
                _this.devices = novosDevices;
                _this.mensagem = 'Device removido com sucesso';
            });
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'Não foi possível remover o device';
        });
    };
    return ListagemComponent;
}());
ListagemComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'listagem',
        templateUrl: './listagem.component.html'
    }),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], ListagemComponent);
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map