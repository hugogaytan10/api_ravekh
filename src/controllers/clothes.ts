import { Request, Response } from 'express';
import Database from '../services/database';
import Clothe from '../models/clothes';

const modelPrenda = new Clothe();
export class Controller extends Database {
    constructor() {
        super({ table: 'prendas' })
    }
    //insertar
    async saveClothe(req: Request, res: Response) {
        try {
            const procedure = {
                name: "insert_prendas",
                items: "?, ?, ?, ?, ?, ?,?,?,?,?,?,?"
            }
            const data = [
                req.body.nombre,
                req.body.precio,
                req.body.talla,
                req.body.descripcion,
                req.body.foto,
                req.body.cantidad_stock,
                req.body.descuento,
                req.body.categoria_id,
                req.body.tienda_id,
                req.body.codigo_barras,
                '1',
                req.body.color
            ]
            const created = await modelPrenda.procedure(procedure, data);
            res.status(200).json(created);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //mostrar todo
    async getClothes(req: Request, res: Response) {
        try {

            const catched = await modelPrenda.findClothes(req.params.id);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //mostrar uno 
    async getClotheById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const catched = await modelPrenda.findOne(id);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //actualizar 
    async updateClothe(req: Request, res: Response) {
        try {
            
            const procedure = {
                name: 'update_prendas',
                items: '?,?,?,?,?,?,?,?,?,?,?,?'
            }
            const data = [
                req.body.nombre,
                req.body.categoria_id, 
                req.body.id,
                req.body.descripcion,
                "1",
                req.body.codigo_barras,
                req.body.color,
                req.body.cantidad_stock, 
                req.body.talla, 
                req.body.precio,
                req.body.foto, 
                req.body.descuento
            ]
            const updated = await modelPrenda.procedure(procedure, data);
            res.status(200).json(updated);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //eliminar
    async deleteClothe(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deleteClothe = {
                estado: "0"
            }
            const deleted = await modelPrenda.updateById(id, deleteClothe);
            if(!deleted) res.status(400);
            res.status(200).json(deleted);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //restaurar
    //eliminar
    async activateClothe(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deleteClothe = {
                estado: "1"
            }
            const deleted = await modelPrenda.updateById(id, deleteClothe);
            if(!deleted) res.status(400);
            res.status(200).json(deleted);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    //ver eliminadas
    async findDeletedClothes(req: Request, res: Response) {
        try {
            const catched = await modelPrenda.findDeletedClothes(req.params.id);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400).json(error);
        }
    }
    async getClothe(req: Request, res: Response) {
        try {
            const catched = await modelPrenda.findClothe(req.params.id);
            if (!catched) res.status(400);
            res.status(200).json(catched);
        } catch (error) {
            res.status(400);
        }
    }
}