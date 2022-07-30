import { Response, Request } from 'express';
import Employee from '../models/employees';
const modelEmployee = new Employee();
export class Controller{
    async getDeletedEmployees(req: Request, res: Response){
        try{
            const catched = await modelEmployee.getDeletedEmployees(req.params.id);
            if(!catched)res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
    async deleteEmployee(req: Request, res: Response){
        try{
            const catched = await modelEmployee.stateEmployee(req.params.id, '0');
            if(!catched)res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
    async activateEmployee(req: Request, res: Response){
        try{
            const catched = await modelEmployee.stateEmployee(req.params.id, '1');
            if(!catched)res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
    async getEmpleados(req: Request, res: Response){
        try{
            const catched = await modelEmployee.getEmployees(req.params.id);
            if(!catched)res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
    async getEmployee(req: Request, res: Response){
        try{
            const catched = await modelEmployee.findOne(req.params.id);
            if(!catched)res.status(400);
            res.status(200).json(catched);
        }catch(error){
            res.status(400);
        }
    }
}