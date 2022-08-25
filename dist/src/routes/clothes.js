"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clothes_1 = require("../controllers/clothes");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new clothes_1.Controller();
//ejemplo: http://localhost:8090/api/prendas
//id de la tienda para rescatar las prendas de cada tienda
routes.get('/prendas/:id', jwt_1.default.checkJWT, controller.getClothes);
routes.get('/prenda/:id', jwt_1.default.checkJWT, controller.getClothe);
//id de la prenda
routes.get('/prenda/codigo/:id', jwt_1.default.checkJWT, controller.getClotheById);
routes.post('/prendas/guardar', jwt_1.default.checkJWT, controller.saveClothe);
routes.put('/prenda/actualizar/', jwt_1.default.checkJWT, controller.updateClothe);
routes.put('/prenda/restaurar/:id', jwt_1.default.checkJWT, controller.activateClothe);
//id de la prenda
routes.put('/prenda/eliminar/:id', jwt_1.default.checkJWT, controller.deleteClothe);
//id de la tienda
routes.get('/prendasEliminadas/:id', jwt_1.default.checkJWT, controller.findDeletedClothes);
exports.default = routes;
//# sourceMappingURL=clothes.js.map