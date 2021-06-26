import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { classToPlain } from "class-transformer";

class ListUsersService{

    async execute(){

        const usersRespository = getCustomRepository(UsersRepository);

        const users =  await usersRespository.find();

        return classToPlain(users);     //permitira excluir a senha do user como foi definido da entidade
    }
};

export { ListUsersService };