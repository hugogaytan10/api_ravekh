import { Request, Response } from 'express';
import { Company } from '../models/company';

const modelCompany = new Company();
export class Controller {
    async getCode(req: Request, res: Response) {
        try {
            const company = {
                codigo: req.body.codigo
            }
            const catched = await modelCompany.updateById(req.body.id, company);
            if (!catched) res.status(400);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400);
        }
    }
    async updateCompany(req: Request, res: Response) {
        try {
            const company = {
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono
            }
            const catched = await modelCompany.updateById(req.body.id, company);
            if (!catched) res.status(400);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400);
        }
    }
    async insertCompany(req: Request, res: Response) {
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
            const catched = await modelCompany.insertCompany(datos);
            if (!catched) res.status(400);
            const empresa = {
            empresa_id: JSON.stringify(catched) 
            }
            res.status(200).json({
                empresa
            });
        } catch (error) {
            res.status(400);
        }
    }
    async getCompany(req: Request, res: Response) {
        try {
            const catched = await modelCompany.getCompany(req.params.id);
            if (!catched) res.status(400);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400);
        }
    }
}