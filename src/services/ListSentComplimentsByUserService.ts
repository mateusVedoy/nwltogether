import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentsRepository";


class ListSentComplimentsByUserService{

    async execute(user_id:string){

        const complimentsRepository = getCustomRepository(ComplimentRepository);

        const compliments = await complimentsRepository.find({
            where: {
                user_sender: user_id
            },
            relations: [                        //retorna toda relação que esse registro tiver
                "userSender",
                "userReceiver",
                "tag"
            ]
        });

        if(!compliments) return "This User donnot created any compliment to someone";

        return compliments;
    }
};

export { ListSentComplimentsByUserService };