import { Request, Response } from 'express';
import User from '../models/users';


const modelUser = new User();

export class Controller {
    //INSERTAR USUARIO
    async saveUser(req: Request, res: Response) {
        try {
            const procedure = {
                name: "insert_usuario",
                items: "?,?,?,?,?,?,?"
            }
            const datos = [req.body.nombre, req.body.apellido, req.body.contrasenia,
            req.body.direccion, req.body.correo, req.body.telefono, req.body.pregunta_seguridad];
            modelUser.procedure(procedure, datos);
            res.status(200).json('Done');
        } catch (error) {
            res.status(400).json(error);
        }

    }

    //INICIO DE SESION DE USUARIO
    async signin(req: Request, res: Response) {
        try {
            //usuario a buscar
            const user = {
                correo: req.body.correo,
                contrasenia: req.body.contrasenia
            }
            //usuario recuperado (si existe)
            const catched = await modelUser.findNewUser(user);
            //sino existe lanzamos un mensaje
            if (!catched) { res.status(400) }
            catched.usuario.contrasenia = "0";
            //encabezado de token al recuperar el usuario
            res.header('token', catched.token).json({
                usuario: catched.usuario,
                token: catched.token
            });
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //DATOS DEL USUARIO
    async profile(req: Request, res: Response) {
        try {
            const user = await modelUser.findUser(req.body.id_usuario);
            if (!user) return res.status(404).json('Usuario no encontrado');
            res.json(user);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //ACTUALIZAR DATOS
    async updateUser(req: Request, res: Response) {
        try {
            //encryptamos la contrasenia
            const hash = modelUser.encrypPassword(req.body.contrasenia);
            const id = req.body.id;
            const updateUser = {
                nombre: req.body.nombre,
                contrasenia: hash,
                direccion: req.body.direccion,
                correo: req.body.correo,
                telefono: req.body.telefono
            }
            const update = await modelUser.updateById(id, updateUser);
            res.status(200).json(update);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    





}