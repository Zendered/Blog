import { User } from ".prisma/client";

import { ICreateUserRequestDTO } from "../useCases/createUser/ICreateUserDTO";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    create(data: ICreateUserRequestDTO): Promise<User | null>;
}
