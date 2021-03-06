import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UserRepository } from "@modules/user/infra/prisma/implementations/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
    sub: string;
}

export const IsAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new AppError("Invalid Token!");
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            `${process.env.JWT_SECRET}`
        ) as IPayload;
        const usersRepository = new UserRepository();
        const user = await usersRepository.findById(user_id);
        usersRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exist!", 401);
        }

        req.user = { id: user_id };

        next();
    } catch (error) {
        throw new AppError("Invalid Token!");
    }
};
