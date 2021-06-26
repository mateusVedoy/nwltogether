import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    
    const { usr_id } = request;

    const usersRepository = getCustomRepository(UsersRepository);

    const { usr_admin } = await usersRepository.findOne(usr_id);

    if(usr_admin)
        return next();

    return response.status(401).end();
}

export { ensureAdmin };