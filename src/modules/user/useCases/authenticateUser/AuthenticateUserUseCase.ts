import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    email: string;
    token: string;
}

export class AuthenticateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }
    async execute({ email, password }: IRequest): Promise<IResponse> {
        console.log("antes", email, password);
        const user = await this.usersRepository.findByEmail(email);
        console.log("depois", email, password);
        const passwordMatch = await compare(password, user.password);
        console.log(passwordMatch);
        console.log("depois do depois", email, password);

        if (!user || !passwordMatch) {
            throw new AppError("Email or Password Incorrect!", 401);
        }
        console.log("depois do depois do depois ainda", email, password);

        const token = sign({}, `${process.env.JWT_SECRET}`, {
            subject: user.id,
            expiresIn: process.env.EXPIRES_IN_TOKEN,
        });

        const tokenReturn: IResponse = {
            token,
            email: user.email,
        };

        return tokenReturn;
    }
}
