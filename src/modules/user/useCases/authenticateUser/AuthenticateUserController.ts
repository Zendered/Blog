import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;
        const user = await this.authenticateUserUseCase.execute({
            email,
            password,
        });
        return res.send(user);
    }
}
