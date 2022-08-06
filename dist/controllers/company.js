var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Company } from '../models/company';
const modelCompany = new Company();
export class Controller {
    getCode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = {
                    codigo: req.body.codigo
                };
                const catched = yield modelCompany.updateById(req.body.id, company);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    updateCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const company = {
                    nombre: req.body.nombre,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono
                };
                const catched = yield modelCompany.updateById(req.body.id, company);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    insertCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const datos = {
                    nombre: req.body.nombre,
                    nombre_propietario: req.body.nombre_propietario,
                    RFC: req.body.RFC,
                    foto: req.body.foto,
                    contrasenia: req.body.contrasenia,
                    direccion_duenio: req.body.direccion_duenio,
                    direccion: req.body.direccion,
                    telefono: req.body.telefono,
                    apellido: req.body.apellido,
                    telefono_duenio: req.body.telefono_duenio,
                    pregunta_seguridad: req.body.pregunta_seguridad,
                    correo: req.body.correo
                };
                const catched = yield modelCompany.insertCompany(datos);
                if (!catched)
                    res.status(400);
                res.status(200).json({
                    id: catched
                });
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    getCompany(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelCompany.getCompany(req.params.id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
}
