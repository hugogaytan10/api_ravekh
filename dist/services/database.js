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
const mysql_1 = __importDefault(require("./mysql"));
class Database {
    constructor(model) {
        this.model = model;
    }
    //mostrar todos
    find() {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`SELECT * FROM ${this.model.table}`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    //mostrar uno
    findOne(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            mysql_1.default.query(`SELECT * FROM ${this.model.table} where id = ${id}`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results[0]);
            });
        }));
    }
    //guardar registro
    save(data) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            mysql_1.default.query(`INSERT INTO ${this.model.table} SET ?`, data, (error, results, fields) => __awaiter(this, void 0, void 0, function* () {
                if (error)
                    reject(error);
                const catched = yield this.findOne(results.insertId);
                resolve(catched);
            }));
        }));
    }
    //actualizar registro
    updateById(id, data) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const keys = Object.keys(data).join(' = ?, ') + ' = ?';
            const values = Object.values(data);
            mysql_1.default.query(`UPDATE ${this.model.table} SET ${keys} WHERE id = ${id}`, values, (error, results, fields) => __awaiter(this, void 0, void 0, function* () {
                if (error)
                    reject(error);
                const catched = yield this.findOne(id);
                resolve(catched);
            }));
        }));
    }
    //procedimientos almacenados
    procedure(procedure, data) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            mysql_1.default.query(`CALL ${procedure.name} (${procedure.items})`, data, (error, results, fields) => __awaiter(this, void 0, void 0, function* () {
                if (error)
                    reject(error);
                resolve(results);
            }));
        }));
    }
}
exports.default = Database;
//# sourceMappingURL=database.js.map