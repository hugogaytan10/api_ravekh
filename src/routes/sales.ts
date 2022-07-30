import { Router } from 'express';
import { Controller } from '../controllers/sales';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/venta/guardar
routes.post('/venta/guardar',chechkJWT.checkJWT,controller.insertSale);



export default routes;