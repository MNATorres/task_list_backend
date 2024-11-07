import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTasks,
} from "../controller/task.controller";

const router = Router();

router.post("/createtask", createTask);
router.get("/alltasks", getTasks);
router.delete("/:id", deleteTask);

export default router;
