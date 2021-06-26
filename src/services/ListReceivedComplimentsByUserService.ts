import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentsRepository";


class ListReceivedComplimentsByUserService{

    async execute(user_id:string){

        const complimentsRepository = getCustomRepository(ComplimentRepository);

        const compliments = await complimentsRepository.find({
            where: {
                user_receiver: user_id
            },
            relations: [                        //retorna toda relação que esse registro tiver
                "userSender",
                "userReceiver",
                "tag"
            ]
        });

        if(compliments) return "This User do not received any compliment";

        return compliments;
    }
};

export { ListReceivedComplimentsByUserService };