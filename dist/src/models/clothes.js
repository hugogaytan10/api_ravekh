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
class Prendas extends database_1.default {
    constructor() {
        super({ table: 'prendas' });
    }
    findClothes(id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                con.query(`select p.id, p.nombre, p.descripcion, dp.codigo_barras, 
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto, dp.descuento, 
                c.nombre as categoria 
                from detalles_de_prenda as dp 
                join prendas as p on p.id = dp.prenda_id 
                join categorias as c on c.id = p.categoria_id 
                join tiendas as t on t.id = c.tienda_id
                join empresas as e on e.id = t.empresa_id
                where p.estado = '1' and t.id = ${id};`, (err, results) => __awaiter(this, void 0, void 0, function* () {
                    if (con) {
                        con.release();
                    }
                    if (error) {
                        reject(error);
                    }
                    resolve(results);
                }));
            });
        });
    }
    findDeletedClothes(id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                con.query(`select p.id, p.nombre, p.descripcion, dp.codigo_barras, 
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto, dp.descuento, 
                c.nombre as categoria 
                from detalles_de_prenda as dp 
                join prendas as p on p.id = dp.prenda_id 
                join categorias as c on c.id = p.categoria_id 
                join tiendas as t on t.id = c.tienda_id
                join empresas as e on e.id = t.empresa_id
                where p.estado = '0' and t.id = ${id};`, (err, results) => __awaiter(this, void 0, void 0, function* () {
                    if (con) {
                        con.release();
                    }
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }));
            });
        });
    }
    findClothe(id) {
        return new Promise((resolve, reject) => {
            (0, mysql_1.default)((error, con) => {
                con.query(`select p.id, p.nombre, p.descripcion, p.categoria_id,
                p.estado, dp.codigo_barras,  
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto,
                dp.descuento from detalles_de_prenda as dp join prendas as p
                on p.id = dp.prenda_id  where p.id = ${id}`, (err, results) => __awaiter(this, void 0, void 0, function* () {
                    if (con) {
                        con.release();
                    }
                    if (err) {
                        reject(err);
                    }
                    resolve(results[0]);
                }));
            });
        });
    }
}
exports.default = Prendas;
//# sourceMappingURL=clothes.js.map