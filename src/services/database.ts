import connection from "./mysql";
interface model{
    table: string
}

class Database {
    model: model;
    constructor(model: model){
        this.model = model;
    }
    //mostrar todos
    find(){
        return new Promise((resolve, reject)=>{
                connection.query(`SELECT * FROM ${this.model.table}`, async(err: any, results: any) => {
                    if(err) reject(err);
                    resolve(results);
                })
        });
    }
    //mostrar uno
    findOne(id: string){
        return new Promise(async (resolve, reject) =>{
                connection.query(`SELECT * FROM ${this.model.table} where id = ${id}`, (err: any, found: any) => {
                    if(err) reject(err);
                    resolve(found[0]);
            })
        });
    }
    //guardar registro
    save(data: any){
        return new Promise(async (resolve, reject)=>{
                connection.query(`INSERT INTO ${this.model.table} SET ?`, data, async (error: any, result: any) => {
                    if(error) reject(error);
                    const catched = await this.findOne(result.insertId);
                    resolve(catched);
                })
        });
    }
    //actualizar registro
    updateById(id: string, data: any){
        return new Promise(async (resolve, reject)=>{
            const keys = Object.keys(data).join(' = ?, ') + ' = ?';
            const values = Object.values(data);
                connection.query(`UPDATE ${this.model.table} SET ${keys} WHERE id = ${id}`, values, async (error: any, update: any) => {
                    if(error) reject(error);
                    const catched = await this.findOne(id);
                    resolve(catched);
            });
        });
    }
    //procedimientos almacenados
    procedure(procedure: any, data: any){
        return new Promise(async(resolve, reject)=>{
                connection.query(`CALL ${procedure.name} (${procedure.items})`,data, async(err: any, results: any) => {
                    if(err) reject(err);
                    resolve(results);
            });
        });
    }
}
export default Database;