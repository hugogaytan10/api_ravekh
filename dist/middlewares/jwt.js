var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jwt = require('jsonwebtoken');
class JWT {
    checkJWT(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accessToken = req.header('token');
                if (!accessToken)
                    res.send('Acceso denegado');
                jwt.verify(accessToken, process.env.SECRET, (err, user) => {
                    if (err) {
                        res.send('Acesso denegado');
                    }
                    else {
                        //datos del usuarios guardados
                        const payload = user;
                        //guardamos el id en userID
                        req.userId = payload.id;
                        next();
                    }
                });
            }
            catch (error) {
                res.clearCookie('token');
                res.redirect('/login');
            }
        });
    }
}
const objJWT = new JWT();
export default objJWT;
