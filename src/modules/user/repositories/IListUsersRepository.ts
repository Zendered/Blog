import { User } from ".prisma/client";

import { IListUsersDTO } from "../useCases/listUsers/IListUsersDTO";

export interface IListUsersRepository {
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[] | null>;
}
