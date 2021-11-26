import { UserRepository } from "@modules/user/infra/prisma/implementations/UsersRepository";

import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
    const userRepository = new UserRepository();

    const authenticateUserUseCase = new AuthenticateUserUseCase(userRepository);
    const authenticateUserController = new AuthenticateUserController(
        authenticateUserUseCase
    );

    return authenticateUserController;
};
