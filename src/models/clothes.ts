
import Database from "../services/database";
import connection from "../services/mysql";

class Prendas extends Database {
    constructor() {
        super({ table: 'prendas' });
    }
    findClothes() {
        return new Promise((resolve, reject) => {
            connection.query(` select p.id, p.nombre, p.descripcion, dp.codigo_barras, 
            dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto, dp.descuento, 
            c.nombre as categoria from detalles_de_prenda as dp join prendas as p on p.id = dp.prenda_id 
            join categorias as c on c.id = p.categoria_id 
            where p.estado = '1';`, (error, results, fields) => {
                if (error) reject(error);
                resolve(results);
            });
        });
    }
    findDeletedClothes() {
        return new Promise((resolve, reject) => {
            connection.query(`select p.id, p.nombre, p.descripcion, dp.codigo_barras,
                dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto,
                dp.descuento, c.nombre as categoria from detalles_de_prenda as dp join prendas as p
                on p.id = dp.id join categorias as c on c.id = p.categoria_id where p.estado = '0';`,
                (error, results, fields) => {
                    if (error) reject(error);
                    resolve(results);
                });
        });
    }
    findClothe(id: string) {
        return new Promise((resolve, reject) => {
            connection.query(`select p.id, p.nombre, p.descripcion, p.categoria_id,
            p.estado, dp.codigo_barras,  
            dp.color, dp.cantidad_stock, dp.talla, dp.precio, dp.foto,
            dp.descuento from detalles_de_prenda as dp join prendas as p
            on p.id = dp.prenda_id  where p.id = ${id}`, (error, results, fields)=>{
                if(error)reject(error);
                resolve(results[0]);
            });
        });
    }

}
export default Prendas;