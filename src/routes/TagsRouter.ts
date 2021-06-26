import { Router } from "express";
import { ListTagsController } from "../controllers/ListTagsController";
import { CreateTagController } from "../controllers/CreateTagController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const TagsRouter = Router();

const createTagController = new CreateTagController();
const listTagsController = new ListTagsController();

TagsRouter.post("/create", ensureAuthenticated, ensureAdmin, createTagController.handle);
TagsRouter.get("/", ensureAuthenticated, listTagsController.handle);

export { TagsRouter };