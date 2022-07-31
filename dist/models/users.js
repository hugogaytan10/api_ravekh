"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("../services/mysql"));
const database_1 = __importDefault(require("../services/database"));
const jwt = require('jsonwebtoken');
class User extends database_1.default {
    constructor() {
        super({ table: 'usuarios' });
    }
    //buscar un usuario por correo y contrasenia
    findUser(id) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`select u.id, u.nombre, u.apellido, u.contrasenia, u.direccion, u.correo, u.telefono, u.pregunta_seguridad,
            u.rol, u.estado, e.id as empresa_id
            from usuarios as u join usuarios_has_tiendas as t
            on t.usuario_id = u.id
            join tiendas as ti on ti.id = t.tienda_id
            join empresas as e
            on e.id = ti.empresa_id
            where u.id = ${id}`, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }
    //firmar un token 
    generateAccessToken(id) {
        return jwt.sign({ id }, process.env.SECRET, { expiresIn: '7d' });
    }
    //encriptar una contrasenia
    encrypPassword(password) {
        let crypto = require('crypto');
        let hash = crypto.createHash('sha1');
        hash.update(password);
        hash = hash.digest('hex');
        return hash;
    }
    findNewUser(user) {
        const hash = this.encrypPassword(user.contrasenia);
        return new Promise((resolve, reject) => {
            mysql_1.default.query(`SELECT * FROM usuarios where correo = ? and contrasenia = ?`, [user.correo, hash], (error, results, fields) => {
                if (error)
                    reject(error);
                console.log(results);
                if (results !== undefined && results.lenght !== 0) {
                    const accessToken = this.generateAccessToken(results[0].id);
                    const userFind = {
                        usuario: results[0],
                        token: accessToken
                    };
                    resolve(userFind);
                }
                reject(error);
            });
        });
    }
}
exports.default = User;
//# sourceMappingURL=users.js.map