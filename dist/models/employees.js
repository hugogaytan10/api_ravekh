"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../services/database"));
const mysql_1 = __importDefault(require("../services/mysql"));
class Employee extends database_1.default {
    constructor() {
        super({ table: 'usuarios' });
    }
    getDeletedEmployees(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select u.nombre, u.apellido, u.telefono, u.rol, u.id
            from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
            join tiendas as t on t.id = ut.tienda_id where tienda_id = ${id} and u.estado = '0';`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    getEmployees(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select u.nombre, u.apellido, u.telefono, u.rol, u.id
            from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
            join tiendas as t on t.id = ut.tienda_id where tienda_id = ${id} and u.estado = '1';  `, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    stateEmployee(id, accion) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`UPDATE usuarios set estado = '${accion}' where id = ${id}`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
}
exports.default = Employee;
//# sourceMappingURL=employees.js.map