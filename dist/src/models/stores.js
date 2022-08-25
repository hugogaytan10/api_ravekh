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
const mysql_1 = __importDefault(require("../services/mysql"));
const database_1 = __importDefault(require("../services/database"));
class Store extends database_1.default {
    constructor() {
        super({ table: "tiendas" });
    }
    getMyStores(empresa_id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                if (error)
                    reject(error);
                con.query(`select * from tiendas where estado = "1" and empresa_id = ${empresa_id};`, (err, stores) => __awaiter(this, void 0, void 0, function* () {
                    if (con) {
                        con.release();
                    }
                    if (err)
                        reject(err);
                    resolve(stores);
                }));
            });
        });
    }
    deletedStores(empresa_id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((err, con) => {
                if (err)
                    reject(err);
                con.query(`select * from tiendas where estado = "0" and empresa_id= ${empresa_id};`, (error, deleteStore) => __awaiter(this, void 0, void 0, function* () {
                    if (con)
                        con.release();
                    if (error)
                        reject(error);
                    resolve(deleteStore);
                }));
            });
        });
    }
    stateStore(id, accion) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                if (error)
                    reject(error);
                con.query(`UPDATE tiendas SET estado = '${accion}' where id = ?`, id, (err, stateStore) => __awaiter(this, void 0, void 0, function* () {
                    const catched = yield this.findOne(id);
                    if (con)
                        con.release();
                    if (err)
                        reject(err);
                    resolve(catched);
                }));
            });
        });
    }
    getStoresByEmployee(id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                if (error)
                    reject(error);
                con.query(`select t.nombre, t.direccion, t.telefono, t.id, t.foto
                from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
                join tiendas as t on t.id = ut.tienda_id where u.id = ${id} and t.estado = '1'; `, (err, stores) => {
                    if (con)
                        con.release();
                    if (err)
                        reject(err);
                    resolve(stores);
                });
            });
        });
    }
}
exports.default = Store;
//# sourceMappingURL=stores.js.map