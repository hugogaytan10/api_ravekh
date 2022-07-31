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
const stores_1 = __importDefault(require("../models/stores"));
const modelStore = new stores_1.default();
class Controller {
    getStores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empresa_id = req.body.empresa_id;
                const catched = yield modelStore.getMyStores(empresa_id);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    updateStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.body.id;
                const updateStore = {
                    nombre: req.body.nombre,
                    direccion: req.body.direccion,
                    foto: req.body.foto,
                    telefono: req.body.telefono
                };
                const catched = yield modelStore.updateById(id, updateStore);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    getStoreById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const catched = yield modelStore.findOne(id);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    insertStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const store = {
                    estado: "1",
                    nombre: req.body.nombre,
                    direccion: req.body.direccion,
                    foto: req.body.foto,
                    telefono: req.body.telefono,
                    empresa_id: req.body.empresa_id
                };
                const insert = yield modelStore.save(store);
                res.status(200).json(insert);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    getDeletedStores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelStore.deletedStores();
                res.status(200).json(catched);
            }
            catch (error) {
                res.json(400).json(error);
            }
        });
    }
    activateStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const catched = yield modelStore.stateStore(id, '1');
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    deleteStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const catched = yield modelStore.stateStore(id, '0');
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    joinToStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: 'registrartUsuarioEmpresa',
                    items: '?,?'
                };
                const data = [req.body.codigo, req.body.id_usuario];
                const catched = yield modelStore.procedure(procedure, data);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json([]);
            }
        });
    }
    assignStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: 'asignarTienda',
                    items: '?,?'
                };
                const data = [req.params.idTienda, req.params.idEmpleado];
                const catched = yield modelStore.procedure(procedure, data);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    removeStore(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: 'quitarTienda',
                    items: '?,?'
                };
                const data = [req.params.idTienda, req.params.idEmpleado];
                const catched = yield modelStore.procedure(procedure, data);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    getStoresByEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelStore.getStoresByEmployee(req.params.id);
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
//# sourceMappingURL=stores.js.map