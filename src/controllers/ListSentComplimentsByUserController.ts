import { Request, Response } from "express";
import { ListSentComplimentsByUserService } from "../services/ListSentComplimentsByUserService";


class ListSentComplimentsByUserController{

    async handle(request: Request, response: Response){

        const { usr_id } = request;

        const listSentComplimentsByUserService = new ListSentComplimentsByUserService();

        const compliments = await listSentComplimentsByUserService.execute(usr_id);

        return response.json(compliments);
    }
};

export { ListSentComplimentsByUserController };