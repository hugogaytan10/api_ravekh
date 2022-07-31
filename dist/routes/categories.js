"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_1 = require("../controllers/categories");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new categories_1.Controller();
//ejemplo: http://localhost:8090/api/categorias
routes.post('/categorias', jwt_1.default.checkJWT, controller.getCategories);
routes.get('/categorias/:id', jwt_1.default.checkJWT, controller.getCategoryById);
routes.post('/categoria/guardar', jwt_1.default.checkJWT, controller.saveCategory);
routes.put('/categoria/eliminar/:id', jwt_1.default.checkJWT, controller.deleteCategory);
routes.put('/categoria/actualizar/', jwt_1.default.checkJWT, controller.updateCategory);
exports.default = routes;
//# sourceMappingURL=categories.js.map