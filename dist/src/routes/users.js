"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new users_1.Controller();
//ejemplo: http://localhost:8090/api/usuario/guardar
routes.post('/usuario/guardar', controller.saveUser);
routes.post('/usuario/verificar', controller.signin);
routes.post('/usuario/perfil', jwt_1.default.checkJWT, controller.profile);
routes.put('/usuario/actualizar', jwt_1.default.checkJWT, controller.updateUser);
routes.post('/usuario/compania', jwt_1.default.checkJWT, controller.finCompany);
exports.default = routes;
//# sourceMappingURL=users.js.map