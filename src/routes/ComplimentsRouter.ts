import { Router } from "express";
import { ListSentComplimentsByUserController } from "../controllers/ListSentComplimentsByUserController";
import { ListReceivedComplimentsByUserController } from "../controllers/ListReceivedComplimentsByUserController";
import { CreateComplimentController } from "../controllers/CreateComplimentController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const ComplimentsRouter = Router();

const createComplimentController = new CreateComplimentController();
const listSentComplimentsByUserController = new ListSentComplimentsByUserController();
const listReceivedComplimentsByUserController = new ListReceivedComplimentsByUserController();


ComplimentsRouter.post("/", ensureAuthenticated, createComplimentController.handle);
ComplimentsRouter.get("/sentByUser", ensureAuthenticated, listSentComplimentsByUserController.handle);             //não tem param, pega user pelo token
ComplimentsRouter.get("/receivedByUser", ensureAuthenticated, listReceivedComplimentsByUserController.handle);     //não tem param, pega user pelo token

export { ComplimentsRouter };