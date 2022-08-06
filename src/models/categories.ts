import connection from "../services/mysql";
import Database from "../services/database";

export interface ICategories {
    nombre: string;
    descripcion: string;
    tienda_id: string;
}
class Category extends Database {
    constructor() {
        super({ table: 'categorias' });
    }
    findCategories(id: string) {
        return new Promise((resolve, reject) => {
            connection.query(`select c.id, c.nombre, c.descripcion, c.nombre, c.tienda_id
            from categorias as c join tiendas as t
            on t.id = c.tienda_id 
            where t.id = ${id} and c.estado = '1';`, (error: any, results: any, fields: any) => {
                if(error)reject(error);
                resolve(results);
            });
        });
    }
}
export default Category;