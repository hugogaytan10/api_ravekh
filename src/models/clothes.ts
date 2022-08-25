
import Database from "../services/database";
import connection from "../services/mysql";

class Prendas extends Database {
    constructor() {
        super({ table: 'prendas' });
    }
    findClothes(id: string) {
        return new Promise((resolve, reject) => {
            connection((error: any, con: any) => {
                con.query(`select p.id, p.nombre, p.descripcion, dp.codigo_barras, 
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto, dp.descuento, 
                c.nombre as categoria 
                from detalles_de_prenda as dp 
                join prendas as p on p.id = dp.prenda_id 
                join categorias as c on c.id = p.categoria_id 
                join tiendas as t on t.id = c.tienda_id
                join empresas as e on e.id = t.empresa_id
                where p.estado = '1' and t.id = ${id};`,
                async(err: any, results: any) => {
                    if(con) {con.release();}
                    if(error) {reject(error);}
                    resolve(results);
                });
            });
        });
    }
    findDeletedClothes(id: string) {
        return new Promise((resolve, reject) => {
            connection((error: any, con: any) => {
                con.query(`select p.id, p.nombre, p.descripcion, dp.codigo_barras, 
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto, dp.descuento, 
                c.nombre as categoria 
                from detalles_de_prenda as dp 
                join prendas as p on p.id = dp.prenda_id 
                join categorias as c on c.id = p.categoria_id 
                join tiendas as t on t.id = c.tienda_id
                join empresas as e on e.id = t.empresa_id
                where p.estado = '0' and t.id = ${id};`,
                async(err: any, results: any) => {
                    if(con) {con.release();}
                    if(err) {reject(err);}
                    resolve(results);
                });
            });
        });
    }
    findClothe(id: string) {
        return new Promise((resolve, reject) => {
            connection((error: any, con: any) => {
                con.query(`select p.id, p.nombre, p.descripcion, p.categoria_id,
                p.estado, dp.codigo_barras,  
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto,
                dp.descuento from detalles_de_prenda as dp join prendas as p
                on p.id = dp.prenda_id  where p.id = ${id}`,
                async(err: any, results: any) => {
                    if(con) {con.release();}
                    if(err) {reject(err);}
                    resolve(results[0]);
                });
            });
        });
    }

}
export default Prendas;