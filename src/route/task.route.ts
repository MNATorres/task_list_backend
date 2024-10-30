import { Router } from "express";
import { createTask, getTasks } from "../controller/task.controller";

const router = Router();

router.post("/createtask", createTask);
router.get("/alltasks", getTasks);

export default router;
