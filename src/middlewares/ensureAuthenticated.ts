import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { SECRET } from "../services/AuthenticateuserService";

interface IPayload{
    sub: string;
};

const ensureAuthenticated = (request: Request, response: Response, next: NextFunction) => {


    const token = request.headers.authorization;

    //const [, token] = request.headers.authorization.split(" ");            caso passe por auth

    if (!token) return response.status(401).end();

    try {

        const { sub } = verify(token, SECRET) as IPayload;            //recupera a propriedade sub que é o user do token

        request.usr_id = sub;                                         //apenas visivel pela manipulação dos arquivos express

        return next();

    } catch (error) {

        return response.status(401).end();
    }
};

export { ensureAuthenticated };

/*
* há duas formas de passar um otken pelo insmonia
* 1. Dentro do insomnia, em Auth, escolher Bearer e passa a chave no campo token
* 2. Dentro do insomnia, em Header, adicionar um cabeçalho chamado Authorization com valor sendo o token
*/