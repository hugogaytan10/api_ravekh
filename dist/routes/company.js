import { Router } from 'express';
import { Controller } from '../controllers/company';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/empresa/codigo
routes.post('/empresa/guardar', controller.insertCompany);
routes.get('/empresa/:id', chechkJWT.checkJWT, controller.getCompany);
routes.post('/empresa/codigo', chechkJWT.checkJWT, controller.getCode);
routes.put('/empresa/actualizar', chechkJWT.checkJWT, controller.updateCompany);
export default routes;
