import { IUsersRepository } from "../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) { }
    async execute({ password, email }: ICreateUserRequestDTO) {
        const userExists = await this.usersRepository.findByEmail(email);

        if (userExists) {
            throw new Error("User already exists!");
        }

        await this.usersRepository.create({ email, password });
    }
}
