import { IListUsersRepository } from "@modules/user/repositories/IListUsersRepository";

export class ListUsersUseCase {
    constructor(private listUsersRepository: IListUsersRepository) { }
    async execute() {
        const users = this.listUsersRepository.findAll();

        return users;
    }
}
