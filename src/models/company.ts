import connection from '../services/mysql';
import Database from "../services/database";
import Employee from './employees';
import { ChildProcess } from 'child_process';
import { release } from 'os';

export class Company extends Database {
    constructor() {
        super({ table: 'empresas' });
    }
    getCompany(id: string) {
        return new Promise((resolve, reject) => {
            connection((err: any, con: any) => {
                con.query(`SELECT * FROM empresas where id = '${id}'`,
                async(error: any, results: any) => {
                    if(con) {con.release();}
                    if(error) reject(error);
                    resolve(results[0]);
                });
            });
        });
    }
    insertCompany(empresa: any): any {
        return new Promise((resolve, reject) => {
            //insertamos la empresa
            connection((err: any, con: any) => {
                con.query(`insert into empresas(nombre,nombre_propietario, RFC, foto, direccion, telefono, pregunta_seguridad, tipo_plan, estatus) 
                values(?,? , ?, ?, ?, ?, ?,'1','1');`,
                [empresa.nombre, empresa.nombre_propietario, empresa.RFC, empresa.foto, empresa.direccion, empresa.telefono, empresa.pregunta_seguridad],
                async(error: any, results: any) => {
                    if(error) reject(error);
                    let empresa_id = results.insertId;
                    con.query(`insert into usuarios(nombre, apellido, contrasenia,direccion, correo, telefono, pregunta_seguridad, rol, estado) 
                    values(?, ?, sha1(?), ?, ?, ?, ?, 'OWN','1');`,
                        [empresa.nombre_propietario, empresa.apellido, empresa.contrasenia, empresa.direccion_duenio, empresa.correo, empresa.telefono_duenio, empresa.pregunta_seguridad],
                        async(error: any, results: any) => {
                            if(con) {con.release();}
                            if(error) {reject(error);}
                            resolve(empresa_id);
                        });
                });
            });
        });
    }
}