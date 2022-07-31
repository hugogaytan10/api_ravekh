import Database from "../services/database";
import connection from "../services/mysql";

class Sales extends Database {
    constructor() {
        super({ table: 'ventas' })
    }
    async insertSale(sale: any) {
        try {
            connection.beginTransaction(function (err: any) {
                if (err) { throw err; }
                connection.query(` INSERT INTO ventas (total, empresa_id, tienda_id) VALUES
                (?, ?, ?)`, [sale.total, sale.empresa_id, sale.tienda_id], function (error: any, result: any, fields: any) {
                    if (error) {
                        return connection.rollback(function () {
                            throw error;
                        });
                    }
                    let ventaId = result.insertId;
                    for (const element of sale.detalle_de_venta) {
                        connection.query(`INSERT INTO detalles_de_venta (precio_unitario, cantidad_prenda, prenda_id, venta_id, usuario_id) 
                    VALUES(?, ?, ?, ?, ?)`,
                            [element.prenda.precio, element.cantidad,
                            element.prenda.id, ventaId, sale.usuario_id], function (error: any, results: any, fields: any) {
                                if (error) {
                                    return connection.rollback(function () {
                                        throw error;
                                    });
                                }
                                connection.query(`update detalles_de_prenda set cantidad_stock = cantidad_stock - ${element.cantidad} where prenda_id = ${element.prenda.id}`,
                                    function (error: any, results: any, fields: any) {
                                        if (error) {
                                            return connection.rollback(function () {
                                                throw error;
                                            });
                                        }
                                        connection.commit(function (err: any) {
                                            if (err) {
                                                return connection.rollback(function () {
                                                    throw err;
                                                });
                                            }
                                        });
                                    });



                            });
                    }
                });
            });
        } catch (error) {
            throw error;
        }
    }
    
}
export default Sales;