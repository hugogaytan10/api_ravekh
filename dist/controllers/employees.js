var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Employee from '../models/employees';
const modelEmployee = new Employee();
export class Controller {
    getDeletedEmployees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelEmployee.getDeletedEmployees(req.params.id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    deleteEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelEmployee.stateEmployee(req.params.id, '0');
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    activateEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelEmployee.stateEmployee(req.params.id, '1');
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    getEmpleados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelEmployee.getEmployees(req.params.id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
    getEmployee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const catched = yield modelEmployee.findOne(req.params.id);
                if (!catched)
                    res.status(400);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400);
            }
        });
    }
}
