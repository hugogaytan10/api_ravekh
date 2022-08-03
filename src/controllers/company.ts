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
            console.log(req.body);
            const procedure = {
                name: "insert_empresa",
                items: "?,?,?,?,?,?,?,?,?,?,?,?"
            }
            const datos = [
                req.body.nombre,
                req.body.nombre_propietario,
                req.body.RFC,
                req.body.foto,
                req.body.contrasenia,
                req.body.direccion_duenio,
                req.body.direccion,
                req.body.telefono,
                req.body.apellido,
                req.body.telefono_duenio,
                req.body.pregunta_seguridad,
                req.body.correo
            ];
            const catched = await modelCompany.procedure(procedure, datos);
            if (!catched) res.status(400);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400);
        }
    }
    async getCompany(req: Request, res: Response){
        try{
            const catched = await modelCompany.getCompany(req.params.id);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
}