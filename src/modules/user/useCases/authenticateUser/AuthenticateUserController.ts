import { Request, Response } from "express";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const user = await this.authenticateUserUseCase.execute({
                email,
                password,
            });
            return res.send(user);
        } catch (error) {
            return res.status(error.statusCode).json({
                Error: error.message || "Something went wrong",
            });
        }
    }
}
