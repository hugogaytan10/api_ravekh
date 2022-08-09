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
                items: '?'
            }
            const catched = await modelStatistic.procedure(procedure, year);
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
                items: '?'
            }
            const catched = await modelStatistic.procedure(procedure, year);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
}