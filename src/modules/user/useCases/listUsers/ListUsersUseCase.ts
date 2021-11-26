import { Request, Response } from "express";

import { IListUsersRepository } from "@modules/user/repositories/IListUsersRepository";
import { AppError } from "@shared/errors/AppError";

import { IListUsersDTO } from "./IListUsersDTO";

export class ListUsersUseCase {
    constructor(private listUsersRepository: IListUsersRepository) { }
    async execute() {
        const users = this.listUsersRepository.findAll();
        return users;
    }
}
