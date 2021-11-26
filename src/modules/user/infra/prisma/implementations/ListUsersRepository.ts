import { IListUsersRepository } from "@modules/user/repositories/IListUsersRepository";

import { User } from ".prisma/client";

import prismaClient from "..";

export class ListUsersRepository implements IListUsersRepository {
    private repository;
    constructor() {
        this.repository = prismaClient.user;
    }
    async findById(id: string): Promise<User | null> {
        const user = await this.repository.findFirst({ where: { id } });
        return user;
    }

    async findAll(): Promise<User[] | null> {
        const user = await this.repository.findMany({
            select: {
                id: true,
                email: true,
            },
        });
        return user;
    }
}
