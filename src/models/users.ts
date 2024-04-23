import connection from "../services/mysql";
import Database from "../services/database";
const jwt = require('jsonwebtoken');
export interface IUser {
    usuario: {
        id: number;
        nombre: string;
        apellido: string;
        contrasenia: string;
        correo: string;
        direccion: string;
        telefono: string;
        pregunta_seguridad: string;
        rol: string;
        estado: string;
    };
    token: string;
}

class User extends Database {
    constructor() {
        super({ table: 'usuarios' });
    }

    //buscar un usuario por correo y contrasenia
    findUser(id: string) {
        return new Promise<IUser>((resolve, reject) => {
                connection.query(`select u.id, u.nombre, u.apellido, u.contrasenia, u.direccion, u.correo, u.telefono, u.pregunta_seguridad,
                u.rol, u.estado, e.id as empresa_id
                from usuarios as u join usuarios_has_tiendas as t
                on t.usuario_id = u.id
                join tiendas as ti on ti.id = t.tienda_id
                join empresas as e
                on e.id = ti.empresa_id
                where u.id = ${id}`, async(err: any, user: any) => {
                    if(err) {reject(err);}
                    resolve(user);
            })
        });
    }
    //firmar un token 
    generateAccessToken(id: string) {
        return jwt.sign({ id }, process.env.SECRET, { expiresIn: '7d' });
    }
    //encriptar una contrasenia
    encrypPassword(password: string): string {
        let crypto = require('crypto');
        let hash = crypto.createHash('sha1');
        hash.update(password);
        hash = hash.digest('hex');
        return hash;
    }

    findNewUser(user: any) {
        const hash: string = this.encrypPassword(user.contrasenia);
        return new Promise<IUser>((resolve, reject) => {
                connection.query(`SELECT * FROM usuarios where correo = ? and contrasenia = ?`,
                    [user.correo, hash], async(err: any, newUser: any) => {
                        if(err) reject(err);
                        if (newUser !== undefined && newUser.length !== 0) {
                            const accessToken = await this.generateAccessToken(newUser[0].id);
                            const userFind = {
                                usuario: newUser[0],
                                token: accessToken
                            }
                            resolve(userFind);
                        }
            })
        });
    }

    findCompany(user: any){
        return new Promise((resolve, reject) => {
            connection.query(` SELECT e.id
            from empresas as e
            join tiendas as t  on t.empresa_id = e.id
            join usuarios_has_tiendas as ut on t.id = ut.tienda_id
            join usuarios as u on ut.usuario_id = u.id;`,
            [user.correo, user.contrasenia], async(err: any, companyID: any) => {
                if(err) reject(err);
                resolve(companyID);
            })
        })
    }
}

export default User;


