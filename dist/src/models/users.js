"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
                where u.id = ${id}`, (err, user) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    reject(err);
                }
                resolve(user);
            }));
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
            mysql_1.default.query(`SELECT * FROM usuarios where correo = ? and contrasenia = ?`, [user.correo, hash], (err, newUser) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    reject(err);
                if (newUser !== undefined && newUser.length !== 0) {
                    const accessToken = yield this.generateAccessToken(newUser[0].id);
                    const userFind = {
                        usuario: newUser[0],
                        token: accessToken
                    };
                    resolve(userFind);
                }
            }));
        });
    }
    findCompany(user) {
        return new Promise((resolve, reject) => {
            mysql_1.default.query(` SELECT e.id
            from empresas as e
            join tiendas as t  on t.empresa_id = e.id
            join usuarios_has_tiendas as ut on t.id = ut.tienda_id
            join usuarios as u on ut.usuario_id = u.id
            where u.correo = ? and u.contrasenia = ?;`, [user.correo, user.contrasenia], (err, companyID) => __awaiter(this, void 0, void 0, function* () {
                if (err)
                    reject(err);
                resolve(companyID);
            }));
        });
    }
}
exports.default = User;
//# sourceMappingURL=users.js.map