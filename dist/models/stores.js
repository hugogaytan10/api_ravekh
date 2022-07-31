"use strict";
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
            mysql_1.default.query(`select * from tiendas where estado = "1" and empresa_id = ${empresa_id};`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    deletedStores() {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select * from tiendas where estado = "0";`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    stateStore(id, accion) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`UPDATE tiendas SET estado = '${accion}' where id = ?`, id, (error, results, fields) => {
                if (error)
                    reject(error);
                const catched = this.findOne(id);
                resolve(catched);
            });
        });
    }
    getStoresByEmployee(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select t.nombre, t.direccion, t.telefono, t.id, t.foto
            from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
            join tiendas as t on t.id = ut.tienda_id where u.id = ${id} and t.estado = '1'; `, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
}
exports.default = Store;
//# sourceMappingURL=stores.js.map