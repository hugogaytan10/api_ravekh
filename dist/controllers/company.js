"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const company_1 = require("../models/company");
const modelCompany = new company_1.Company();
class Controller {
    getCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = {
                    codigo: req.body.codigo
                };
                const catched = yield modelCompany.updateById(req.body.id, company);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    updateCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = {
                    nombre: req.body.nombre,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono
                };
                const catched = yield modelCompany.updateById(req.body.id, company);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    insertCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: "insert_empresa",
                    items: "?,?,?,?,?,?,?,?,?,?,?,?"
                };
                const datos = [
                    req.body.nombre,
                    req.body.nombre_propietario,
                    req.body.RFC,
                    req.body.foto,
                    req.body.contrasenia,
                    req.body.direccion_duenio,
                    req.body.direccion,
                    req.body.telefono,
                    req.body.apellido,
                    req.body.telefono_duenio,
                    req.body.pregunta_seguridad,
                    req.body.correo
                ];
                const catched = yield modelCompany.procedure(procedure, datos);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    getCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelCompany.getCompany(req.params.id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=company.js.map