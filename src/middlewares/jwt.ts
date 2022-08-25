import { NextFunction, Response, Request } from "express";
const jwt = require('jsonwebtoken');
//info de payload
interface IPayload{
    id: string;
    iat: number;
    exp: number;
}
class JWT {
    async checkJWT(req: Request, res: Response, next: NextFunction) {

        try {
            const accessToken = req.header('token');
            if (!accessToken) res.send('Acceso denegado');

            jwt.verify(accessToken, process.env.SECRET, (err: any, user: any) => {
                if (err) {
                    res.send('Acesso denegado');
                } else {
                    //datos del usuarios guardados
                    const payload = user as IPayload;
                    //guardamos el id en userID
                    req.userId = payload.id;
                    next();
                }
            })
        } catch (error) {
            res.clearCookie('token');
            res.redirect('/login');
        }
    }

}
const objJWT = new JWT();
export default objJWT;