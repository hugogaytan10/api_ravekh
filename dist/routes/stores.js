"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stores_1 = require("../controllers/stores");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new stores_1.Controller();
//ejemplo: http://localhost:8090/api/tiendas
//las tiendas de la empresa
routes.post('/tiendas', jwt_1.default.checkJWT, controller.getStores);
routes.post('/tienda/unirse', jwt_1.default.checkJWT, controller.joinToStore);
routes.get('/tienda/:id', jwt_1.default.checkJWT, controller.getStoreById);
routes.get('/tiendas/eliminadas', jwt_1.default.checkJWT, controller.getDeletedStores);
routes.post('/tienda/actualizar/', jwt_1.default.checkJWT, controller.updateStore);
routes.post('/tienda/guardar/', jwt_1.default.checkJWT, controller.insertStore);
routes.put('/tienda/activar/:id', jwt_1.default.checkJWT, controller.activateStore);
routes.put('/tienda/eliminar/:id', jwt_1.default.checkJWT, controller.deleteStore);
routes.put('/tienda/quitar_tienda/:idTienda/:idEmpleado', jwt_1.default.checkJWT, controller.removeStore);
routes.put('/tienda/asignar_tienda/:idTienda/:idEmpleado', jwt_1.default.checkJWT, controller.assignStore);
//las tiendas donde esta el usuario
routes.get('/tiendas/empleado/:id', jwt_1.default.checkJWT, controller.getStoresByEmployee);
exports.default = routes;
//# sourceMappingURL=stores.js.map