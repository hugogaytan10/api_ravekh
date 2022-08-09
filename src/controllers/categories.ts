import {Request, Response} from 'express';
import Category from "../models/categories";

const modelCategory = new Category();
export class Controller {
    async getCategories(req: Request, res: Response){
        try{
            const catched = await modelCategory.findCategories(req.body.id);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async getCategoryById(req: Request, res: Response){
        try{
            const { id } = req.params;
            const catched = await modelCategory.findOne(id);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async saveCategory(req: Request, res: Response){
        try{
            const procedure = {
                name: 'insert_categoria',
                items: "?,?,?"
            }
            const category = [req.body.nombre, req.body.descripcion, req.body.tienda_id];
            const catched = await modelCategory.procedure(procedure, category);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async deleteCategory(req: Request, res: Response){
        try{
            const { id } = req.params;
            const deleteCategory = {
                estado: '0'
            }
            const catched = await modelCategory.updateById(id, deleteCategory);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async updateCategory(req: Request, res: Response){
        try{
            const id = req.body.id;
            const update = {
                nombre: req.body.nombre,
                descripcion: req.body.descripcion
            }
            const catched = await modelCategory.updateById(id, update);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
}