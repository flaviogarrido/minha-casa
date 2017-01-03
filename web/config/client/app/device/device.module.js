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
var device_component_1 = require("./device.component");
var device_service_1 = require("./device.service");
var device_pipes_1 = require("./device.pipes");
var DeviceModule = (function () {
    function DeviceModule() {
    }
    return DeviceModule;
}());
DeviceModule = __decorate([
    core_1.NgModule({
        declarations: [device_component_1.DeviceComponent, device_pipes_1.FiltroPorTitulo],
        exports: [device_component_1.DeviceComponent, device_pipes_1.FiltroPorTitulo],
        providers: [device_service_1.DeviceService]
    }),
    __metadata("design:paramtypes", [])
], DeviceModule);
exports.DeviceModule = DeviceModule;
//# sourceMappingURL=device.module.js.map