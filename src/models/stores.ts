import connection from "../services/mysql";
import Database from "../services/database";

class Store extends Database{
    constructor(){
        super({table: "tiendas"});
    }
    getMyStores(empresa_id: string){
        return new Promise((resolve, reject)=>{
                connection.query(`select * from tiendas where estado = "1" and empresa_id = ${empresa_id};`,
                async (err: any, stores: any) => {
                    if(err) reject(err);
                    resolve(stores);
                })
        })
    }
    deletedStores(empresa_id: string){
        return new Promise((resolve, reject)=>{
                connection.query(`select * from tiendas where estado = "0" and empresa_id= ${empresa_id};`,
                async(error: any, deleteStore: any) => {
                    if(error) reject(error);
                    resolve(deleteStore);
            })
        });
    }
    stateStore(id: string, accion: string){
        return new Promise((resolve, reject) => {
                connection.query(`UPDATE tiendas SET estado = '${accion}' where id = ?`, id, async(err: any, stateStore: any) => {
                    const catched = await this.findOne(id);
                    if(err) reject(err);
                    resolve(catched);
            })
        });
    }
    getStoresByEmployee(id: string){
        return new Promise((resolve, reject) =>{
                connection.query(`select t.nombre, t.direccion, t.telefono, t.id, t.foto
                from usuarios as u join usuarios_has_tiendas as ut on u.id = ut.usuario_id
                join tiendas as t on t.id = ut.tienda_id where u.id = ${id} and t.estado = '1'; `,
                (err: any, stores: any) => {
                    if(err) reject(err);
                    resolve(stores);
            }) 
        })
    }
}
export default Store;