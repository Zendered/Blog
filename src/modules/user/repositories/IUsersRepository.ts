import { User } from "../entities/User";
import { ICreateUserRequestDTO } from "../useCases/createUserDTO";

export interface IUsersRepository {
    findByEmail(email: string): Promise<User>;
    create(data: ICreateUserRequestDTO): Promise<void>;
}
