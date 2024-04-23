"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statistics_1 = require("../controllers/statistics");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new statistics_1.Controller();
//ejemplo: http://localhost:8090/api/graficaVentas
routes.post('/graficaVentas', jwt_1.default.checkJWT, controller.getSalesByYear);
routes.post('/graficaPrendas', jwt_1.default.checkJWT, controller.getClothesByYear);
routes.post('/graficaMasVendidos', jwt_1.default.checkJWT, controller.getBestSallingClothes);
exports.default = routes;
//# sourceMappingURL=statistics.js.map