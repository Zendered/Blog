import { AppError } from "@shared/errors/AppError";

import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }
    async execute({ email, password }: ICreateUserRequestDTO): Promise<void> {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new AppError("User already exists!");
        }

        await this.usersRepository.create({ email, password });
    }
}
