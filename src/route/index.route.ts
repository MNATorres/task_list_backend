import { Router } from "express";
import task from "./task.route";

const router = Router();

router.use("/task", task);

export default router;
