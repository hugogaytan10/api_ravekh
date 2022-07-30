import { Router } from 'express';
import { Controller } from '../controllers/categories';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/categorias
routes.post('/categorias', chechkJWT.checkJWT ,controller.getCategories);
routes.get('/categorias/:id', chechkJWT.checkJWT ,controller.getCategoryById);
routes.post('/categoria/guardar', chechkJWT.checkJWT, controller.saveCategory);
routes.put('/categoria/eliminar/:id', chechkJWT.checkJWT, controller.deleteCategory);
routes.put('/categoria/actualizar/', chechkJWT.checkJWT, controller.updateCategory);
export default routes;