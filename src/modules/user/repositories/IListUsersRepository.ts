import { User } from ".prisma/client";

export interface IListUsersRepository {
    findById(id: string): Promise<User>;
    findAll(): Promise<User[]>;
}
