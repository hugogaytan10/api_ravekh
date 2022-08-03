"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mysql_1 = __importDefault(require("../services/mysql"));
const database_1 = __importDefault(require("../services/database"));
class Company extends database_1.default {
    constructor() {
        super({ table: 'empresas' });
    }
    getCompany(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`SELECT * FROM empresas where id = '${id}'`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results[0]);
            });
        });
    }
    insertCompany(empresa) {
        return new Promise((resolve, reject) => {
            //insertamos la empresa
            mysql_1.default.query(`insert into empresas(nombre,nombre_propietario, RFC, foto, direccion, telefono, pregunta_seguridad, tipo_plan, estatus) 
                values(?,? , ?, ?, ?, ?, ?,'1','1');`, [empresa.nombre, empresa.nombre_propietario, empresa.RFC, empresa.foto, empresa.direccion, empresa.telefono, empresa.pregunta_seguridad], (error, results, fields) => {
                if (error) {
                    reject(error);
                }
                //recuperamos el id de esa empresa
                let empresa_id = results.insertId;
                //insertamos el usuario
                mysql_1.default.query(`insert into usuarios(nombre, apellido, contrasenia,direccion, correo, telefono, pregunta_seguridad, rol, estado) 
                    values(?, ?, sha1(?), ?, ?, ?, ?, 'OWN','1');`, [empresa.nombre_propietario, empresa.apellido, empresa.contrasenia, empresa.direccion_duenio, empresa.correo, empresa.telefono_duenio, empresa.pregunta_seguridad], (error, results, fields) => {
                    if (error) {
                        reject(error);
                    }
                    //realizamos el commit\clg
                    console.log(empresa_id);
                    resolve(empresa_id);
                });
            });
        });
    }
}
exports.Company = Company;
//# sourceMappingURL=company.js.map