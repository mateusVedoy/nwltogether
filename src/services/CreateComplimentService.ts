import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";

interface IComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string,
    message: string
};

class CreateComplimentService {

    async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {

        const complimentsRepository = getCustomRepository(ComplimentRepository);
        const usersRepository = getCustomRepository(UsersRepository);

        if(user_sender === user_receiver) throw new Error ("You cannot register a compliment to yourself");

        const isUserReceiverRegistered = await usersRepository.findOne(user_receiver);

        if(!isUserReceiverRegistered) throw new Error ("Invalid receiver!");


        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepository.save(compliment);

        return compliment;
    }
};

export { CreateComplimentService };