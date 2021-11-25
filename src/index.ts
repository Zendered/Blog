import express from "express";

import { router } from "./infra/http/routes/users.routes";

export const app = express();
app.use(express.json());
app.use(router);
