import { Router } from 'express';
import { Controller } from '../controllers/clothes';
import checkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/prendas
//id de la tienda para rescatar las prendas de cada tienda
routes.get('/prendas/:id', checkJWT.checkJWT, controller.getClothes);
routes.get('/prenda/:id', checkJWT.checkJWT, controller.getClothe);
routes.get('/prenda/codigo/:id', checkJWT.checkJWT, controller.getClotheById);
routes.post('/prendas/guardar', checkJWT.checkJWT, controller.saveClothe);
routes.put('/prenda/actualizar/', checkJWT.checkJWT, controller.updateClothe);
routes.put('/prenda/eliminar/:id', checkJWT.checkJWT, controller.deleteClothe);
routes.get('/prendasEliminadas/:id', checkJWT.checkJWT, controller.findDeletedClothes);

export default routes;
