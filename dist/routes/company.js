"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const company_1 = require("../controllers/company");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new company_1.Controller();
//ejemplo: http://localhost:8090/api/empresa/codigo
routes.post('/empresa/guardar', controller.insertCompany);
routes.get('/empresa/:id', jwt_1.default.checkJWT, controller.getCompany);
routes.post('/empresa/codigo', jwt_1.default.checkJWT, controller.getCode);
routes.put('/empresa/actualizar', jwt_1.default.checkJWT, controller.updateCompany);
exports.default = routes;
//# sourceMappingURL=company.js.map