import { Router } from 'express';
import { Controller } from '../controllers/statistics';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/graficaVentas
routes.get('/graficaVentas',chechkJWT.checkJWT,controller.getSalesByYear);
routes.get('/graficaPrendas',chechkJWT.checkJWT,controller.getClothesByYear);



export default routes;