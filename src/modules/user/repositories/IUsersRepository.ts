import { User } from ".prisma/client";

import { ICreateUserRequestDTO } from "../useCases/createUser/ICreateUserDTO";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    create(data: ICreateUserRequestDTO): Promise<User>;
}
