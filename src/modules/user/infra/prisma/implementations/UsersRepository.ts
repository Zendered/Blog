import { IUsersRepository } from "@modules/user/repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "@modules/user/useCases/createUser/CreateUserDTO";

import { User } from ".prisma/client";

import prismaClient from "../index";

export class UserRepository implements IUsersRepository {
    // private repository;
    // constructor() {
    //     this.repository = prismaClient.user;
    // }
    async findByEmail(email: string): Promise<User | null> {
        const user = await prismaClient.user.findFirst({ where: { email } });
        return user;
    }
    async create({
        email,
        password,
    }: ICreateUserRequestDTO): Promise<User | null> {
        const user = await prismaClient.user.create({
            data: {
                email,
                password,
            },
        });

        return user;
    }
}
