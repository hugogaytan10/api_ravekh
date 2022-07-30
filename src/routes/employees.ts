import { Router } from 'express';
import { Controller } from '../controllers/employees';
import checkJWT from '../middlewares/jwt';
const routes = Router();
const controller = new Controller();
//ejemplo: http://localhost:8090/api/prendas
//recupera los empleado de la tienda, el id es de la tienda
routes.get('/empleados/:id', checkJWT.checkJWT, controller.getEmpleados);
routes.get('/empleados/eliminados/:id', checkJWT.checkJWT, controller.getDeletedEmployees);
//los id de aqui se refieren al id del empleado
routes.put('/empleado/eliminar/:id', checkJWT.checkJWT, controller.deleteEmployee);
routes.put('/empleado/activar/:id', checkJWT.checkJWT, controller.activateEmployee);
routes.get('/empleado/:id', checkJWT.checkJWT, controller.getEmployee);

export default routes;