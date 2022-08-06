var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Sales from '../models/sales';
const modelSale = new Sales();
export class Controller {
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
