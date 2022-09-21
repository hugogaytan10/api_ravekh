import Database from "../services/database";
import connection from "../services/mysql";

class Employee extends Database {
    constructor() {
        super({ table: 'usuarios' })
    }
    getDeletedEmployees(id: string) {
        return new Promise((resolve, reject) => {
                connection.query(`select u.nombre, u.apellido, u.telefono, u.rol, u.id
                from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
                join tiendas as t on t.id = ut.tienda_id where tienda_id = ${id} and u.estado = '0';`,
                async(err: any, results: any) => {
                    if(err) reject(err);
                    resolve(results);
            })
        })
    }
    getEmployees(id: string){
        return new Promise((resolve, reject) =>{
            connection((err: any, con: any) => {
                con.query(`select u.nombre, u.apellido, u.telefono, u.rol, u.id
                from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
                join tiendas as t on t.id = ut.tienda_id where tienda_id = ${id} and u.estado = '1';`,
                async(error: any, results: any) => {
                    if(error) reject(error);
                    resolve(results);
                });
            });
        });
    }
    stateEmployee(id: string, accion: string){
        return new Promise((resolve, reject) => {
                connection.query(`UPDATE usuarios set estado = '${accion}' where id = ${id}`, 
                async(error: any, results: any) => {
                    if(error) reject(error);
                    resolve(results);
                });
        });
    }
    

}
export default Employee;