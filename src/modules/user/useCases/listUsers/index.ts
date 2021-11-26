import { ListUsersRepository } from "@modules/user/infra/prisma/implementations/ListUsersRepository";

import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (): ListUsersController => {
    const listUsersRepository = new ListUsersRepository();

    const listUsersUseCase = new ListUsersUseCase(listUsersRepository);
    const listUsersController = new ListUsersController(listUsersUseCase);

    return listUsersController;
};
