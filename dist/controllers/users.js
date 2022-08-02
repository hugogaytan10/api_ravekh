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
exports.Controller = void 0;
const users_1 = __importDefault(require("../models/users"));
const modelUser = new users_1.default();
class Controller {
    //INSERTAR USUARIO
    saveUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const procedure = {
                    name: "insert_usuario",
                    items: "?,?,?,?,?,?,?"
                };
                const datos = [req.body.nombre, req.body.apellido, req.body.contrasenia,
                    req.body.direccion, req.body.correo, req.body.telefono, req.body.pregunta_seguridad];
                modelUser.procedure(procedure, datos);
                res.status(200).json('Done');
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //INICIO DE SESION DE USUARIO
    signin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //usuario a buscar
                const user = {
                    correo: req.body.correo,
                    contrasenia: req.body.contrasenia
                };
                //usuario recuperado (si existe)
                const catched = yield modelUser.findNewUser(user);
                //sino existe lanzamos un mensaje
                if (!catched) {
                    res.status(400);
                }
                catched.usuario.contrasenia = "0";
                //encabezado de token al recuperar el usuario
                res.header('token', catched.token).json({
                    usuario: catched.usuario,
                    token: catched.token
                });
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //DATOS DEL USUARIO
    profile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield modelUser.findUser(req.body.id_usuario);
                if (!user)
                    return res.status(404).json('Usuario no encontrado');
                res.json(user);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
    //ACTUALIZAR DATOS
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
                };
                const update = yield modelUser.updateById(id, updateUser);
                res.status(200).json(update);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=users.js.map