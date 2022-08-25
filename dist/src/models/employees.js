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
const database_1 = __importDefault(require("../services/database"));
const mysql_1 = __importDefault(require("../services/mysql"));
class Employee extends database_1.default {
    constructor() {
        super({ table: 'usuarios' });
    }
    getDeletedEmployees(id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                con.query(`select u.nombre, u.apellido, u.telefono, u.rol, u.id
                from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
                join tiendas as t on t.id = ut.tienda_id where tienda_id = ${id} and u.estado = '0';`, (err, results) => __awaiter(this, void 0, void 0, function* () {
                    if (con)
                        con.release();
                    if (err)
                        reject(err);
                    resolve(results);
                }));
            });
        });
    }
    getEmployees(id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((err, con) => {
                con.query(`select u.nombre, u.apellido, u.telefono, u.rol, u.id
                from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
                join tiendas as t on t.id = ut.tienda_id where tienda_id = ${id} and u.estado = '1';`, (error, results) => __awaiter(this, void 0, void 0, function* () {
                    if (con)
                        con.release();
                    if (error)
                        reject(error);
                    resolve(results);
                }));
            });
        });
    }
    stateEmployee(id, accion) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((err, con) => {
                con.query(`UPDATE usuarios set estado = '${accion}' where id = ${id}`, (error, results) => __awaiter(this, void 0, void 0, function* () {
                    if (con)
                        con.release();
                    if (error)
                        reject(error);
                    resolve(results);
                }));
            });
        });
    }
}
exports.default = Employee;
//# sourceMappingURL=employees.js.map