import {Response, Request } from 'express';
import Statistic from "../models/statistics";

const modelStatistic = new Statistic();
export class Controller {
    async getSalesByYear(req: Request, res: Response){
        try{
            let date = new Date();
            let year = date.getFullYear();
            const procedure = {
                name: 'VentasPorAnio',
                items: '?,?'
            }
            const data = [year, req.body.store_id];
            const catched = await modelStatistic.procedure(procedure, data);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async getClothesByYear(req: Request, res: Response){
        try{
            let date = new Date();
            let year = date.getFullYear();
            const procedure = {
                name: 'cantidadDePrendasPorAnio',
                items: '?,?'
            }
            const data = [year, req.body.store_id];
            const catched = await modelStatistic.procedure(procedure, data);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    async getBestSallingClothes(req: Request, res: Response){
        try{
            let date = new Date();
            let year = date.getFullYear(); 
            const procedure = {
                name: 'prendas_mas_vendidas',
                items: '?,?'
            };
            const data = [year, req.body.store_id];
            const catched = await modelStatistic.procedure(procedure, data);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
}