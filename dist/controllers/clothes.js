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
const database_1 = __importDefault(require("../services/database"));
const clothes_1 = __importDefault(require("../models/clothes"));
const modelPrenda = new clothes_1.default();
class Controller extends database_1.default {
    constructor() {
        super({ table: 'prendas' });
    }
    //insertar
    saveClothe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: "insert_prendas",
                    items: "?, ?, ?, ?, ?, ?,?,?,?,?,?,?"
                };
                const data = [
                    req.body.nombre,
                    req.body.precio,
                    req.body.talla,
                    req.body.descripcion,
                    req.body.foto,
                    req.body.cantidad_stock,
                    req.body.descuento,
                    req.body.categoria_id,
                    req.body.tienda_id,
                    req.body.codigo_barras,
                    '1',
                    req.body.color
                ];
                const created = yield modelPrenda.procedure(procedure, data);
                res.status(200).json(created);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //mostrar todo
    getClothes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelPrenda.findClothes();
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //mostrar uno 
    getClotheById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const catched = yield modelPrenda.findOne(id);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //actualizar 
    updateClothe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: 'update_prendas',
                    items: '?,?,?,?,?,?,?,?,?,?,?,?'
                };
                const data = [
                    req.body.nombre,
                    req.body.categoria_id,
                    req.body.id,
                    req.body.descripcion,
                    "1",
                    req.body.codigo_barras,
                    req.body.color,
                    req.body.cantidad_stock,
                    req.body.talla,
                    req.body.precio,
                    req.body.foto,
                    req.body.descuento
                ];
                const updated = yield modelPrenda.procedure(procedure, data);
                res.status(200).json(updated);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //eliminar
    deleteClothe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deleteClothe = {
                    estado: "0"
                };
                const deleted = yield modelPrenda.updateById(id, deleteClothe);
                res.status(200).json(deleted);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //ver eliminadas
    findDeletedClothes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelPrenda.findDeletedClothes();
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    getClothe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelPrenda.findClothe(req.params.id);
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
//# sourceMappingURL=clothes.js.map