import { Router } from 'express';
import { Controller } from '../controllers/stores';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/tiendas
//las tiendas de la empresa
routes.post('/tiendas/', chechkJWT.checkJWT, controller.getStores);
routes.post('/tienda/unirse', chechkJWT.checkJWT, controller.joinToStore);
routes.get('/tienda/:id', chechkJWT.checkJWT, controller.getStoreById);
routes.post('/tienda/actualizar/', chechkJWT.checkJWT, controller.updateStore);
routes.post('/tienda/guardar/', chechkJWT.checkJWT, controller.insertStore);
routes.put('/tienda/activar/:id', chechkJWT.checkJWT, controller.activateStore);
routes.put('/tienda/eliminar/:id', chechkJWT.checkJWT, controller.deleteStore);
routes.put('/tienda/quitar_tienda/:idTienda/:idEmpleado', chechkJWT.checkJWT, controller.removeStore);
routes.put('/tienda/asignar_tienda/:idTienda/:idEmpleado', chechkJWT.checkJWT, controller.assignStore);
//las tiendas donde esta el usuario
routes.get('/tiendas/empleado/:id', chechkJWT.checkJWT, controller.getStoresByEmployee);
//las tiendas eliminas, id de la empresa
routes.get('/tiendas/eliminadas/:id', chechkJWT.checkJWT, controller.getDeletedStores);
export default routes;
