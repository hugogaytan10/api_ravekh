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
const categories_1 = __importDefault(require("../models/categories"));
const modelCategory = new categories_1.default();
class Controller {
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelCategory.findCategories(req.body.id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const catched = yield modelCategory.findOne(id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    saveCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: 'insert_categoria',
                    items: "?,?,?"
                };
                const category = [req.body.nombre, req.body.descripcion, req.body.tienda_id];
                const catched = yield modelCategory.procedure(procedure, category);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deleteCategory = {
                    estado: '0'
                };
                const catched = yield modelCategory.updateById(id, deleteCategory);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.id;
                const update = {
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion
                };
                const catched = yield modelCategory.updateById(id, update);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=categories.js.map