import { CreateUserService } from "../services/CreateUserService";
import { Request, Response } from "express";

class CreateUserController {

    async handle(request: Request, response: Response) {

        try {
                                //passa um valor padrão para prop admin
            const { name, email, admin = false, password } = request.body;

            const createUserService = new CreateUserService();
    
            const returnedUser = await createUserService.execute({ name, email, admin, password });
    
            return response.json(returnedUser);

        } catch (error) {
            
            return response.status(400).json({ message: error.message });
        }
      
    }
};

export { CreateUserController };