"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sales_1 = require("../controllers/sales");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new sales_1.Controller();
//ejemplo: http://localhost:8090/api/venta/guardar
routes.post('/venta/guardar', jwt_1.default.checkJWT, controller.insertSale);
exports.default = routes;
//# sourceMappingURL=sales.js.map