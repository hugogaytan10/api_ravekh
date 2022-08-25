"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employees_1 = require("../controllers/employees");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const routes = (0, express_1.Router)();
const controller = new employees_1.Controller();
//ejemplo: http://localhost:8090/api/prendas
//recupera los empleado de la tienda, el id es de la tienda
routes.get('/empleados/:id', jwt_1.default.checkJWT, controller.getEmpleados);
routes.get('/empleados/eliminados/:id', jwt_1.default.checkJWT, controller.getDeletedEmployees);
//los id de aqui se refieren al id del empleado
routes.put('/empleado/eliminar/:id', jwt_1.default.checkJWT, controller.deleteEmployee);
routes.put('/empleado/activar/:id', jwt_1.default.checkJWT, controller.activateEmployee);
routes.get('/empleado/:id', jwt_1.default.checkJWT, controller.getEmployee);
exports.default = routes;
//# sourceMappingURL=employees.js.map