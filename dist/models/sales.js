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
class Sales extends database_1.default {
    constructor() {
        super({ table: 'ventas' });
    }
    insertSale(sale) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mysql_1.default.beginTransaction(function (err) {
                    if (err) {
                        throw err;
                    }
                    mysql_1.default.query(` INSERT INTO ventas (total, empresa_id, tienda_id) VALUES
                (?, ?, ?)`, [sale.total, sale.empresa_id, sale.tienda_id], function (error, result, fields) {
                        if (error) {
                            return mysql_1.default.rollback(function () {
                                throw error;
                            });
                        }
                        let ventaId = result.insertId;
                        for (const element of sale.detalle_de_venta) {
                            mysql_1.default.query(`INSERT INTO detalles_de_venta (precio_unitario, cantidad_prenda, prenda_id, venta_id, usuario_id) 
                    VALUES(?, ?, ?, ?, ?)`, [element.prenda.precio, element.cantidad,
                                element.prenda.id, ventaId, sale.usuario_id], function (error, results, fields) {
                                if (error) {
                                    return mysql_1.default.rollback(function () {
                                        throw error;
                                    });
                                }
                                mysql_1.default.query(`update detalles_de_prenda set cantidad_stock = cantidad_stock - ${element.cantidad} where prenda_id = ${element.prenda.id}`, function (error, results, fields) {
                                    if (error) {
                                        return mysql_1.default.rollback(function () {
                                            throw error;
                                        });
                                    }
                                    mysql_1.default.commit(function (err) {
                                        if (err) {
                                            return mysql_1.default.rollback(function () {
                                                throw err;
                                            });
                                        }
                                    });
                                });
                            });
                        }
                    });
                });
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = Sales;
//# sourceMappingURL=sales.js.map