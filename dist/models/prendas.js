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
            c.nombre as categoria 
            from detalles_de_prenda as dp join prendas as p on p.id = dp.prenda_id 
            join categorias as c on c.id = p.categoria_id 
            where p.estado = "1";`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
}
exports.default = Prendas;
//# sourceMappingURL=prendas.js.map