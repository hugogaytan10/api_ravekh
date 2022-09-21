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
class Category extends database_1.default {
    constructor() {
        super({ table: 'categorias' });
    }
    findCategories(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select c.id, c.nombre, c.descripcion, c.nombre, c.tienda_id
                from categorias as c join tiendas as t
                on t.id = c.tienda_id 
                where t.id = ${id} and c.estado = '1';`, (err, results) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    reject(err);
                resolve(results);
            }));
        });
    }
}
exports.default = Category;
//# sourceMappingURL=categories.js.map