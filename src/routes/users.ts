import { Router } from 'express';
import { Controller } from '../controllers/users';
import chechkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/usuario/guardar
routes.post('/usuario/guardar', controller.saveUser);
routes.post('/usuario/verificar',controller.signin);
routes.post('/usuario/perfil', chechkJWT.checkJWT, controller.profile);
routes.put('/usuario/actualizar', chechkJWT.checkJWT, controller.updateUser);
routes.post('/usuario/compania', chechkJWT.checkJWT, controller.finCompany);


export default routes;


