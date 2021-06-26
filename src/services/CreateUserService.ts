import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { genSalt, hash } from "bcryptjs";

interface IUserRequest {
    name: string,
    email: string,
    admin?: boolean,
    password: string
};

class CreateUserService {

    async execute({ name, email, admin, password }: IUserRequest) {

        const usersRepository = getCustomRepository(UsersRepository);

        if(!email) throw new Error("Email must be informed!")           //a excessão será tratada na camada acima (controller)

        const usr_email = email;

        const userAlreadyExists = await usersRepository.findOne({usr_email});

        if(userAlreadyExists)
            throw new Error("User Already Exists");

        const hashPass = await hash(password, await genSalt(10));

        const newUser = usersRepository.create({
            usr_name: name,
            usr_email: email,
            usr_admin: admin,
            usr_password: hashPass
        });

        await usersRepository.save(newUser);

        return newUser;
    }
};

export { CreateUserService };