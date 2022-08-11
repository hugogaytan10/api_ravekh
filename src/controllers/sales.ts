import {Request, Response} from 'express';
import Sales from '../models/sales';
const modelSale = new Sales();
export class Controller{
    async insertSale(req: Request, res: Response){
        try{
            const clothe = {
                total: req.body.total,
                empresa_id: req.body.empresa_id,
                tienda_id: req.body.tienda_id,
                usuario_id: req.body.usuario_id,
                detalle_de_venta: req.body.detalle_de_venta
            }
            console.log(clothe);
            const catched = await modelSale.insertSale(clothe);
            if(!catched) res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400).json(error);
        }
    }
    
}