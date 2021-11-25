import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUsersUseCase: CreateUserUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const user = await this.createUsersUseCase.execute({ email, password });
        return res.status(201).send(user);
    }
}
