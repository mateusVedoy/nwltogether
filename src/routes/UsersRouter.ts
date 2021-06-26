import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ListUsersController } from "../controllers/ListUsersController";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";

const UsersRouter = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const authenticateUserController = new AuthenticateUserController();

UsersRouter.post("/create", createUserController.handle);
UsersRouter.get("/", ensureAuthenticated, listUsersController.handle);
UsersRouter.post("/login", authenticateUserController.handle);

export { UsersRouter };