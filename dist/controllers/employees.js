"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
const employees_1 = __importDefault(require("../models/employees"));
const modelEmployee = new employees_1.default();
class Controller {
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
exports.Controller = Controller;
//# sourceMappingURL=employees.js.map