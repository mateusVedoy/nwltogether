import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

export const SECRET = "cinco 348hg39u4h gali 545h4h4h--0uh380h nhada boa pra comer";

interface IAuthenticaterequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticaterequest) {

        const userRepository = getCustomRepository(UsersRepository);

        const usr_email = email;

        const user = await userRepository.findOne({ usr_email });

        if(!user) throw new Error ("Incorrect credentials");

        const isCorrect = await compare(password, user.usr_password);

        if(!isCorrect) throw new Error ("Incorrect credential");

        const token = sign({
            id: user.usr_id,
            email: user.usr_email,
            name: user.usr_name
            },
            SECRET,
            {
                subject: user.usr_id,
                expiresIn: "1h"         //dura 1hora
            }
        );

        return token;
    };

};

export { AuthenticateUserService };