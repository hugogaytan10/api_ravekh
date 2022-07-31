"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../services/mysql"));
const database_1 = __importDefault(require("../services/database"));
class Category extends database_1.default {
    constructor() {
        super({ table: 'categorias' });
    }
    findCategories(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select c.id, c.nombre, c.descripcion, c.nombre, c.tienda_id
            from categorias as c join tiendas as t
            on t.id = c.tienda_id join empresas as e
            on t.empresa_id = e.id
            where e.id = ${id};`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
}
exports.default = Category;
//# sourceMappingURL=categories.js.map