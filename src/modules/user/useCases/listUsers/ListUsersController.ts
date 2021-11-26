import { Request, Response } from "express";

import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
    constructor(private listUsersUseCase: ListUsersUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const user = await this.listUsersUseCase.execute();
            return res.send(user);
        } catch (error: unknown) {
            res.status(error.statusCode).json({
                Error: error.message,
            });
        }
    }
}
