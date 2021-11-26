import { Request, Response, Router } from "express";

import createUserController from "@modules/user/useCases/createUser";
import listUsersController from "@modules/user/useCases/listUsers";

export const usersRouter = Router();

usersRouter.post("/", (req: Request, res: Response) => {
    return createUserController().handle(req, res);
});

usersRouter.get("/", (req: Request, res: Response) => {
    return listUsersController().handle(req, res);
});
