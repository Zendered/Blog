import { NextFunction, Request, Response, Router } from "express";

import authenticateUserController from "@modules/user/useCases/authenticateUser";
import createUserController from "@modules/user/useCases/createUser";
import listUsersController from "@modules/user/useCases/listUsers";

export const usersRouter = Router();

usersRouter.post("/", (req: Request, res: Response) =>
    createUserController().handle(req, res)
);

usersRouter.post("/login", (req: Request, res: Response) =>
    authenticateUserController().handle(req, res)
);

usersRouter.get("/", (req: Request, res: Response) =>
    listUsersController().handle(req, res)
);
