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
var device_component_1 = require("../device/device.component");
var device_service_1 = require("../device/device.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var CadastroComponent = (function () {
    function CadastroComponent(service, fb, route, router) {
        var _this = this;
        this.device = new device_component_1.DeviceComponent();
        this.mensagem = '';
        this.service = service;
        this.route = route;
        this.router = router;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.service
                    .buscaPorId(id)
                    .subscribe(function (device) { return _this.device = device; }, function (erro) { return console.log(erro); });
            }
        });
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            imageurl: ['', forms_1.Validators.required],
            deviceurl: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        console.log(this.device);
        this.service
            .cadastra(this.device)
            .subscribe(function (res) {
            _this.mensagem = res.mensagem;
            _this.device = new device_component_1.DeviceComponent();
            if (!res.inclusao)
                _this.router.navigate(['']);
        }, function (erro) { return console.log(erro); });
    };
    return CadastroComponent;
}());
CadastroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'cadastro',
        templateUrl: './cadastro.component.html'
    }),
    __metadata("design:paramtypes", [device_service_1.DeviceService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
], CadastroComponent);
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map