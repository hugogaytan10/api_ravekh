"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../services/database"));
const mysql_1 = __importDefault(require("../services/mysql"));
class Prendas extends database_1.default {
    constructor() {
        super({ table: 'prendas' });
    }
    findClothes() {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(` select p.id, p.nombre, p.descripcion, dp.codigo_barras, 
            dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto, dp.descuento, 
            c.nombre as categoria from detalles_de_prenda as dp join prendas as p on p.id = dp.prenda_id 
            join categorias as c on c.id = p.categoria_id 
            where p.estado = '1';`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    findDeletedClothes() {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select p.id, p.nombre, p.descripcion, dp.codigo_barras,
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto,
                dp.descuento, c.nombre as categoria from detalles_de_prenda as dp join prendas as p
                on p.id = dp.id join categorias as c on c.id = p.categoria_id where p.estado = '0';`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    findClothe(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select p.id, p.nombre, p.descripcion, p.categoria_id,
            p.estado, dp.codigo_barras,  
            dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto,
            dp.descuento from detalles_de_prenda as dp join prendas as p
            on p.id = dp.prenda_id  where p.id = ${id}`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results[0]);
            });
        });
    }
}
exports.default = Prendas;
//# sourceMappingURL=clothes.js.map