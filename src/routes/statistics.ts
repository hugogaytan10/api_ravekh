import { Router } from 'express';
import { Controller } from '../controllers/statistics';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/graficaVentas
routes.post('/graficaVentas',chechkJWT.checkJWT,controller.getSalesByYear);
routes.post('/graficaPrendas',chechkJWT.checkJWT,controller.getClothesByYear);
routes.post('/graficaMasVendidos',chechkJWT.checkJWT,controller.getBestSallingClothes);



export default routes;