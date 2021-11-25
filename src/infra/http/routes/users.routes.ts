import { Request, Response, Router } from "express";

export const router = Router();

router.get("/test", (req: Request, res: Response) => res.send("bob"));
