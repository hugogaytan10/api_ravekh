"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prendas_1 = require("../controllers/prendas");
const routes = (0, express_1.Router)();
const controller = new prendas_1.Controller();
routes.get('/prendas', controller.read);
routes.get('/prenda/:id', controller.show);
routes.post('/prendas/guardar', controller.create);
routes.put('/prenda/actualizar/:id', controller.update);
routes.delete('/prenda/eliminar/:id', controller.delete);
exports.default = routes;
//# sourceMappingURL=prendas.js.map