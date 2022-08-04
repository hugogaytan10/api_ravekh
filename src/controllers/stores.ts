import {Request, Response} from 'express';
import Store from '../models/stores';
const modelStore = new Store();
export class Controller{
    async getStores(req: Request, res: Response){
        try{
            const empresa_id = req.body.empresa_id;
            const catched = await modelStore.getMyStores(empresa_id);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async updateStore(req: Request, res: Response){
        try{
            const id = req.body.id;
            const updateStore = {
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                foto: req.body.foto,
                telefono: req.body.telefono
            }
            const catched = await modelStore.updateById(id, updateStore);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async getStoreById(req: Request, res: Response){
        try{
            const { id } = req.params;
            const catched = await modelStore.findOne(id);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async insertStore(req: Request, res: Response){
        try{
            const store = {
                estado: "1",
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                foto: req.body.foto,
                telefono: req.body.telefono,
                empresa_id: req.body.empresa_id
            }
            const insert = await modelStore.save(store);
            res.status(200).json(insert);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async getDeletedStores(req: Request, res: Response){
        try{
            const empresa_id = req.body.empresa_id;
            const catched = await modelStore.deletedStores(empresa_id);
            res.status(200).json(catched);
        }catch(error){
            res.json(400).json(error);
        }
    }
    async activateStore(req: Request, res: Response){
        try{
            const { id } = req.params;
            const catched = await modelStore.stateStore(id, '1');
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async deleteStore(req: Request, res: Response){
        try{
            const { id } = req.params;
            const catched = await modelStore.stateStore(id, '0');
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async joinToStore(req: Request, res: Response){
        try{
            const procedure = {
                name: 'registrartUsuarioEmpresa',
                items: '?,?'
            }
            const data = [req.body.codigo, req.body.id_usuario];
            const catched = await modelStore.procedure(procedure, data);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json([]);
        }
    }
    async assignStore(req: Request, res: Response){
        try{
            const procedure = {
                name: 'asignarTienda',
                items: '?,?'
            }
            const data = [req.params.idTienda, req.params.idEmpleado];
            const catched = await modelStore.procedure(procedure, data);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
    async removeStore(req: Request, res: Response){
        try{
            const procedure = {
                name: 'quitarTienda',
                items: '?,?'
            }
            const data = [req.params.idTienda, req.params.idEmpleado];
            const catched = await modelStore.procedure(procedure, data);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
    async getStoresByEmployee(req: Request, res: Response){
        try{
            const catched = await modelStore.getStoresByEmployee(req.params.id);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
}