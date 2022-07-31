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
const sales_1 = __importDefault(require("../models/sales"));
const modelSale = new sales_1.default();
class Controller {
    insertSale(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const clothe = {
                    total: req.body.total,
                    empresa_id: req.body.empresa_id,
                    tienda_id: req.body.tienda_id,
                    usuario_id: req.body.usuario_id,
                    detalle_de_venta: req.body.detalle_de_venta
                };
                const catched = yield modelSale.insertSale(clothe);
                res.status(200).json(catched);
            }
            catch (error) {
                res.status(400).json(error);
            }
        });
    }
}
exports.Controller = Controller;
//# sourceMappingURL=sales.js.map