import connection from '../services/mysql';
import Database from "../services/database";

export class Company extends Database{
    constructor(){
        super({table: 'empresas'});
    }
    getCompany(id: string){
        return new Promise((resolve, reject) =>{
            connection.query(`SELECT * FROM empresas where id = '${id}'`, (error: any, results: any, fields: any) =>{
                if(error)reject(error);
                resolve(results[0]);
            })
        })
    }
}