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
routes.post('/usuario/verificar', controller.signin);
routes.get('/profile/', jwt_1.default.checkJWT, controller.profile);
exports.default = routes;
//# sourceMappingURL=usuarios.js.map