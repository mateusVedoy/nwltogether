import { response, Router } from "express";
import { UsersRouter } from "./UsersRouter";
import { ComplimentsRouter } from "./ComplimentsRouter";
import { TagsRouter } from "./TagsRouter";

const router = Router();

router.use("/users", UsersRouter);
router.use("/compliments", ComplimentsRouter);
router.use("/tags", TagsRouter);

export { router };