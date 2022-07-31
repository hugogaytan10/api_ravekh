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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const prendas_1 = __importDefault(require("../models/prendas"));
const Prendas = new prendas_1.default();
class Controller {
    //insertar
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: "insert_prendas",
                    items: "?, ?, ?, ?, ?, ?,?,?,?,?,?,?"
                };
                const created = yield Prendas.procedure(procedure, req.body);
                res.status(200).json(created);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //mostrar todo
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield Prendas.findClothes();
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //mostrar uno 
    show(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const catched = yield Prendas.findOne(id);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //actualizar 
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const updated = yield Prendas.updateById(id, req.body);
                res.status(200).json(updated);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deleted = yield Prendas.deleteById(id);
                res.status(200).json(deleted);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=prendas.js.map