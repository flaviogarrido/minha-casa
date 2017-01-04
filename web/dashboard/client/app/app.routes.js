"use strict";
var router_1 = require("@angular/router");
var listagem_component_1 = require("./listagem/listagem.component");
var device_component_1 = require("./device/device.component");
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'device/:id', component: device_component_1.DeviceComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map