import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "@modules/user/useCases/createUser/ICreateUserDTO";

import { User } from ".prisma/client";

import prismaClient from "../index";

export class UserRepository implements IUsersRepository {
    private repository;
    constructor() {
        this.repository = prismaClient.user;
    }
    async create({
        email,
        password,
    }: ICreateUserRequestDTO): Promise<User | null> {
        const user = await this.repository.create({
            data: {
                email,
                password,
            },
        });

        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        const user = await this.repository.findFirst({ where: { email } });
        return user;
    }

    async findById(id: string): Promise<User | null> {
        const user = await this.repository.findFirst({ where: { id } });
        return user;
    }
}
