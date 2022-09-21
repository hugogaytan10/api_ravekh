import Database from "../services/database";
import connection from "../services/mysql";

class Sales extends Database {
    constructor() {
        super({ table: 'ventas' })
    }

    async insertSale(sale: any) {
        return new Promise((resolve, reject) => {
                connection.query(`INSERT INTO ventas (total, empresa_id, tienda_id) VALUES
                (?, ?, ?)`, [sale.total, sale.empresa_id, sale.tienda_id], async(err: any, results: any) => {
                    if(err) reject(err);
                    const ventaId = results.insertId;
                    for(const element of sale.detalle_de_venta){
                        connection.query(`INSERT INTO detalles_de_venta (precio_unitario, cantidad_prenda, prenda_id, venta_id, usuario_id) 
                        VALUES(?, ?, ?, ?, ?)`,
                            [element.prenda.precio, element.cantidad,
                            element.prenda.id, ventaId, sale.usuario_id], async(err: any, results: any) => {
                                if(err) reject(err);
                                connection.query(`update detalles_de_prenda set cantidad_stock = cantidad_stock - ${element.cantidad} where prenda_id = ${element.prenda.id}`, 
                                async(err: any, results: any) => {
                                    if(err) reject(err);
                                })
                            })
                    }
                    resolve(ventaId);
                })
        })
    }
}
export default Sales;