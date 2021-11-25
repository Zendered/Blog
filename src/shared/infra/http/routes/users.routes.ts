import { Request, Response, Router } from "express";

import createUserController from "@modules/user/useCases/createUser";

export const usersRouter = Router();

usersRouter.post("/", (req: Request, res: Response) => {
    return createUserController().handle(req, res);
});
