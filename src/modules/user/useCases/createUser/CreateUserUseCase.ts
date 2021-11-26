import { hash } from "bcrypt";

import { AppError } from "@shared/errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }
    async execute({ email, password }: ICreateUserRequestDTO): Promise<void> {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError("Email/Password Invalid!");
        }

        const hashedPassword = await hash(password, 9);

        await this.usersRepository.create({ email, password: hashedPassword });
    }
}
